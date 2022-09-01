// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const ncrip = require("ncrip")
import dbConnect from "../../lib/DbConnection";

import user from "../../models/user";

export default async function handler(req, res) {

  await dbConnect();
  
  const method = req.method;

  if(method === "POST"){
    const {newpassword,password}=req.body;
    const {boom,offer} = req.cookies;
    if(!newpassword && !password && !boom && !offer){
        return res.status(400).send("error in validation data empty!")
    }
    const _id = ncrip.dnc(boom,offer);
    const ChackUser = await user.findById({_id});
    if(!ChackUser){
        res.setHeader("Set-Cookie",[cookie.serialize("boom","",{
                maxAge: 60,
                sameSite: "strict",
                path: "/"
            }),
            cookie.serialize("offer",'',{
                maxAge:60,
                sameSite: "strict",
                path: "/"
        })
        ])
        return res.status(400).send("error in validation identety empty!")
    }

    const passwordInDB = ncrip.dnc(ChackUser.password,process.env.N_KEY);
    const newPassHash = ncrip.enc(newpassword,process.env.N_KEY);
    if(passwordInDB  === password){
       
        try{
            const resdatauser = await user.findByIdAndUpdate(
                    {_id},
                    {$set:{password:newPassHash}},
                    {new:true}
                )
            console.log(resdatauser);
            res.status(200).send("password change");
        }catch(e){
            console.log(e)
            res.status(400).send("server error!")
        }
    }else{
        res.status(400).send("wrong")
    }

  }

  if (method === "GET"){
    
  }

}
