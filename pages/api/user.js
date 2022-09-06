// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const ncrip = require("ncrip")
import dbConnect from "../../lib/DbConnection";

import user from "../../models/user";

export default async function handler(req, res) {

  await dbConnect();
  
  const method = req.method;

  if(method === "POST"){
      const {phone} = req.body;

      let dataPh = await user.findOne({phone});
 
      if(dataPh){
        return res.status(200).send({for:"phone",err:"phone number is use"})
      }

      let userTOadd = {...req.body};
      userTOadd.password = ncrip.enc(req.body.password,process.env.N_KEY)
     
      try{
      	new user(userTOadd).save();
      	 res.status(201).send("user createrd");
      }catch(err){
        console.log(err)
      	res.status(400).send(err)
      }
  }

  if (method === "GET"){
    const key = req.headers.cookies
    const hash = req.headers.boom
    // console.log(key,hash)
    const _id = ncrip.dnc(hash,key);
    // // let _id = 1234;
    // // console.log(_id);
    try {
      let userOne = await user.findOne({_id});
      let sendObj = {
        name:userOne.name,
        phone:userOne.phone,
        email:userOne.email,
        address:userOne.address,
        image:userOne.image,
      }
      res.send(sendObj)
    } catch (error) {
      // console.log(error);
      res.status(400).send(error)
    }
  }

}
