const mongoose =require('mongoose');
const Schema=mongoose.Schema;
const Model=mongoose.model;

const PositionSchema=new Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price:Number,
    net: String,
    day: String,
    isLoss: Boolean,
  
})
const Position=new Model("Position",PositionSchema);

module.exports=Position;