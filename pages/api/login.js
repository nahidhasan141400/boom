
const ncrip = require("ncrip")
import dbConnect from "../../lib/DbConnection";
import user from "../../models/user";
import cookie from "cookie";

export default async function handler(req, res) {
    await dbConnect();
    const method = req.method;

    // login function

    if(method === "POST"){
        const {phone,password} = req.body
        try{
            
        const userData = await user.findOne({phone});
        if(!userData){
            return res.json({err:true,msg:"something is wrong"})
        }

        const mainPass = ncrip.dnc(userData.password,process.env.N_KEY);

        if(mainPass === password){

            let k = Math.round(Math.random()*4000);
            let coc = ncrip.enc(userData._id,k);
            
            res.setHeader("Set-Cookie",[cookie.serialize("boom",coc,{
                maxAge: (60*60)*60,
                sameSite: "strict",
                path: "/"
            }),
            cookie.serialize("offer",k,{
                maxAge: (60*60)*60,
                sameSite: "strict",
                path: "/"
            })
        ])
           res.status(200).json({err:null, msg:"ok"})
        }else{
            res.send({err:true,msg:"something is wrong!"})
        }

        }catch(e){
            console.log(e)
            res.status(400).send({err:"something is wrong!"})
        }
    }
}