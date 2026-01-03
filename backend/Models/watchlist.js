const mongoose =require('mongoose');
const Schema=mongoose.Schema;
const Model=mongoose.model;

const WatchlistSchema=new Schema({
    
    name: String,
    price: Number,
    percent:String,
    isDown:Boolean,
      
  
})
const Watchlist=new Model("Watchlist",WatchlistSchema);

module.exports=Watchlist;