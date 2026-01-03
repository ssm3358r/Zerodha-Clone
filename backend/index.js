if(process.env.Node_ENV!=="production")
{
require("dotenv").config();
}
const express=require("express");
const app=express();
const port=3002;
const mongoose=require("mongoose");
const User=require("./Models/user");
const session=require("express-session");
const passport=require("passport");
const localStrategy=require("passport-local");
const Holding = require("./Models/holdings");
const Position = require("./Models/positions");
const Order = require("./Models/orders");
const cors=require("cors");

const allowedOrigins = [
    process.env.FRONTEND_ORIGIN || "http://localhost:3000",
    "http://localhost:3001",
];
const corsOptions = {
    origin: function (origin, callback) {
        // allow requests with no origin (like mobile apps, curl, Postman)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) !== -1) {
            return callback(null, true);
        } else {
            return callback(new Error("CORS policy: Origin not allowed"));
        }
    },
    credentials: true,
};
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const uri=process.env.MONGO_URL;
app.listen(port ,()=>{
    console.log(`listening at port ${port}`);
    mongoose.connect(uri).then(()=>{
        console.log('connected to mongodb server ');
        
    }).catch((err)=>{
        console.log(err); 
    })
})

const sessionOptions={
    
    secret:process.env.secret,
    resave:false,
    saveUninitialized:true,
    //exploring cookie options
   cookie: {
    httpOnly: true,
    sameSite: "lax",
    expires: Date.now() +  7*24*60*60*1000, // 7 days later
    maxAge: 7*24*60*60*1000,
}
};


app.use(session(sessionOptions));

app.use(passport.initialize());// initialising passport
app.use(passport.session());// using session with passport
passport.use(new localStrategy(User.authenticate()));// authentication method of user model

passport.serializeUser(User.serializeUser());// store user in session
passport.deserializeUser(User.deserializeUser());// get user from session


const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.status(401).json({
    success: false,
    message: "Unauthorized"
  });
};


app.post("/signup",async(req,res)=>{
   try{ let {username,email,password}=req.body;
    const newUser=new User({username,email});// we are not passing password directly to the model
    const user=await User.register(newUser,password);// this method is provided by passport local mongoose to hash the password and store it in the db
    console.log('user',user);
    return res.json({
        message:"Signup Successful",
        success: true,
        user: {
          id: user._id,
          username: user.username
        }
      });
}
catch(err){
    console.log(err);
    
}

})


app.get("/allholdings",async(req,res)=>{
  const allholdings=await Holding.find({});
  res.json(allholdings);
})
app.get("/allpositions",async(req,res)=>{
  const allpositions=await Position.find({});
  res.json(allpositions);
})
app.get("/allorders",isLoggedIn,async(req,res)=>{
  const allorders=await Order.find({ user: req.user._id });
  res.json(allorders);
})


app.post("/addorders",isLoggedIn,async(req,res)=>{
  const order=req.body;
  const newOrder=new Order({
    user:req.user._id,
    name: order.name,
    qty: order.qty,
    price:order.price,
    mode:order.mode,
    })
    await newOrder.save();
    return res.newOrder;
})

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password"
      });
    }

    req.login(user, (err) => {
      if (err) return next(err);

      return res.json({
        message:"Login Successful",
        success: true,
        user: {
          id: user._id,
          username: user.username
        }
      });
    });
  })(req, res, next);
});

app.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    req.session.destroy(() => {
      res.clearCookie("connect.sid"); // important
      res.json({ success: true });
    });
  });
});

app.get("/user",async(req,res)=>{
   if (req.isAuthenticated()) {
    return res.json({
      success: true,
      user: {
        id: req.user._id,
        username: req.user.username,
        email: req.user.email,
      },
    });
  } else {
    return res.status(401).json({
      success: false,
      message: "Not authenticated",
    });
  }
})



