import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for product.'],
    maxlength: [40, 'Name cannot be more than 40 characters'],
    unique:true
  },
  price: {
    type: Number, 
    required: [true, 'Please provide price number of product'],
    maxlength: [16, 'price number cannot be more than 16 characters'],
  },
  des: {
    type: String,
    required: [true, 'Please provide decription of product']
  },
  catagory: {
    type: String,
    required: [true, 'Please provide catagory of product']
  },
  image: {
    required: [true, 'Please provide an image url for product.'],
    type: String,
  }
})

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)
