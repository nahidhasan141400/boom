// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const ncrip = require("ncrip");
import dbConnect from "../../lib/DbConnection";

import order from "../../models/order";

export default async function handler(req, res) {

  await dbConnect();
  
  const method = req.method;

  if(method === "POST"){
    if(!req.cookies){
      return res.status(400).send("error unAuth  !!!!")
    }
    try{
      const id = ncrip.dnc(req.cookies.boom,req.cookies.offer);
      let address = req.body.Chack? "":req.body.address;
      
      const  dataForDb = await new order({
        orderData: req.body.data,
        user :id,
        status: 1,
        address: address
    });
      const SaveDataDB = await dataForDb.save();
      res.send(SaveDataDB)
      console.log(SaveDataDB);
    }catch(e){
      console.log(e)
      res.status(500).json(e)
    }
  }

  if (method === "GET"){
    if(!req.cookies.boom && !req.cookies.offer){
     return res.status(400).send("go awae");
    }

    try{
      const _id = ncrip.dnc(req.cookies.boom,req.cookies.offer);
      
      let resData = await order.find({user:_id});

      if(req.headers.id){
        let filterData = resData.filter((el)=>{
          console.log(el)
          return el._id == req.headers.id;
        })
        if(!filterData[0]){
          return res.status(400).send("ha ha ah !!")
        }
        return res.send(filterData[0]);
      }
      res.send(resData);
    }
    catch(e){
      console.log(e);
      res.status(400).send("auth error")
    }
  }

}
