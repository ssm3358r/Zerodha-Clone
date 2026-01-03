 const mongoose = require("mongoose");
  const schema=mongoose.Schema;
  const passportLocalMongoose = require("passport-local-mongoose").default;
  // const Order=require("./orders");


  const UserSchema=new schema({
  
  email: {
    type: String,
    required: true,
    unique: true
  },
 

  })

  UserSchema.plugin(passportLocalMongoose);
  const User=mongoose.model("User",UserSchema);
  module.exports=User;