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
        if(req.headers.id){
            console.log(req.headers.id)
            try{
                const data = await product.findOne({_id:req.headers.id});
                res.send(data)
            }catch(e){
                console.log(e);
                res.send(e);
            }
        }else{
            try{
                const data = await product.find();
                res.send(data)
            }catch(e){
                console.log(e);
                res.send(e);
            }
        }
        
    }
}

