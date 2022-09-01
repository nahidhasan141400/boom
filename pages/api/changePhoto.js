// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const ncrip = require("ncrip")
import dbConnect from "../../lib/DbConnection";
import user from "../../models/user";
import multer from "multer"

var upload = multer({
  dest: "./upload"
})


export default async function handler(req, res) {
  await dbConnect();
  const method = req.method;
 
  if(method === "POST"){
    let midelware = upload.single("myfile")
    midelware(req,res,()=>{
      
  

      console.log('in mid')
      res.send("ok");
    })
    
  }

  if (method === "GET"){
    
  }

}
