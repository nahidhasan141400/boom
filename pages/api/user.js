// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const ncrip = require("ncrip")
// const dbConnect = require("../../lib/DbConnection");
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
     
      try{
      	new user({...req.body}).save();
      	 res.status(201).send("user createrd");
      }catch(err){
      	res.statue(400).send(err)
      }
  }

  if (method === "GET"){
    res.send("ok")
  }

}
