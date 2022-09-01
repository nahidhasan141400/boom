import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  orderData: {
    type: Array,
    required: [true, 'Please provide order data'],
  },
  user :{
        type:mongoose.Schema.Types.ObjectID,
        ref: 'User',
        required:true
    },
  status: {
    type: Number, 
    required: [true, 'Please provide status'],
  },
  address:{
    type: String
  }
},{ timestamps:true})

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
