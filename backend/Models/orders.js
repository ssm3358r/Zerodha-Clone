const mongoose =require('mongoose');
const Schema=mongoose.Schema;
const Model=mongoose.model;
const User=require("./user");


const OrderSchema=new Schema({
        user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
      name: String,
     qty: Number,
     price:Number,
     mode:String
})
const Order=new Model("Order",OrderSchema);

module.exports=Order;