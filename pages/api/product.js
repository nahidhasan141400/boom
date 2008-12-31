import product from "../../models/product";
import dbConnect from "../../lib/DbConnection";
export default async function handler(req,res){
    await dbConnect();
    const method = req.method;
    if(method === "POST"){
        let bodydata = req.body;
       
        let price = Number(bodydata.price)
        let data = {
            ...bodydata,
        }
        data.price = price
        try{
           const newProduct = new product(data);
           const pro = await newProduct.save();
           res.send(pro)
        }catch(e){
            console.log(e)
            res.send(e)
        }
    }
    if(method === "GET"){

    }
}

