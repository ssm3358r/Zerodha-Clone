if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const _connectMongo = require('connect-mongo');
const MongoStore = _connectMongo && _connectMongo.default ? _connectMongo.default : _connectMongo;
const passport = require("passport");
const LocalStrategy = require("passport-local");
const cors = require("cors");

const User = require("./Models/user");
const Holding = require("./Models/holdings");
const Position = require("./Models/positions");
const Order = require("./Models/orders");

/* ================= MIDDLEWARE ================= */
// Trust proxy for Render/Heroku (needed for secure cookies behind proxy)
app.set("trust proxy", 1);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* ================= CORS ================= */
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://zerodhastocks.netlify.app",
  "https://zerodhadash.netlify.app",
  process.env.FRONTEND_ORIGIN,
  process.env.DASHBOARD_ORIGIN,
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      // Log for debugging
      console.log("CORS blocked origin:", origin);
      return callback(new Error("CORS policy: Origin not allowed"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/* ================= SESSION ================= */
const store=MongoStore.create({
  mongoUrl:process.env.MONGO_URL,
  crypto:{
    secret:process.env.secret
  },
  
  touchAfter:24*60*60
})

app.use(
  session({
    store,
    secret: process.env.secret,
    resave: false,
    saveUninitialized: false,
    name: "connect.sid", // Explicit cookie name
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Only secure in production (HTTPS)
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // "none" requires secure: true
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      path: "/", // Ensure cookie is available for all paths
    },
  })
);

/* ================= PASSPORT ================= */
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/* ================= AUTH MIDDLEWARE ================= */
const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  return res.status(401).json({ success: false, message: "Unauthorized" });
};

/* ================= ROUTES ================= */
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.register(
      new User({ username, email }),
      password
    );

    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ success: false, message: err.message });
      }

      res.json({
        success: true,
        message: "Signup successful",
        user: { id: user._id, username: user.username },
      });
    });

  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});


app.post("/login", passport.authenticate("local"), (req, res) => {
  // Session cookie is automatically set by express-session
  // Ensure response includes proper headers
  res.json({
    success: true,
    user: { id: req.user._id, username: req.user.username },
  });
});

app.get("/logout", (req, res) => {
  req.logout(() => {
    req.session.destroy(() => {
      // Clear cookie with same options used to set it
      res.clearCookie("connect.sid", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        path: "/",
      });
      res.json({ success: true });
    });
  });
});

app.get("/user", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ success: false });
  }
  res.json({
    success: true,
    user: {
      id: req.user._id,
      username: req.user.username,
      email: req.user.email,
    },
  });
});

app.get("/allholdings", async (req, res) => res.json(await Holding.find({})));
app.get("/allpositions", async (req, res) => res.json(await Position.find({})));
app.get("/allorders", isLoggedIn, async (req, res) =>
  res.json(await Order.find({ user: req.user._id }))
);

/* ================= START SERVER ================= */
const PORT = process.env.PORT || 3002;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch(console.error);
