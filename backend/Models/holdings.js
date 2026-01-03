const mongoose =require('mongoose');
const Schema=mongoose.Schema;
const Model=mongoose.model;

const HoldingsSchema=new Schema({
    
      name: String,
    qty: Number,
    avg: Number,
    price:Number,
    net: String,
    day: String,
    isLoss: Boolean
  
})
const Holding=new Model("Holding",HoldingsSchema);

module.exports=Holding;