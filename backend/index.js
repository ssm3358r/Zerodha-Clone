if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const cors = require("cors");

const User = require("./Models/user");
const Holding = require("./Models/holdings");
const Position = require("./Models/positions");
const Order = require("./Models/orders");

/* ================= MIDDLEWARE ================= */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* ================= CORS ================= */
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  process.env.FRONTEND_ORIGIN,
  process.env.DASHBOARD_ORIGIN,
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("CORS policy: Origin not allowed"));
    },
    credentials: true,
  })
);

/* ================= SESSION ================= */
app.use(
  session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none", // REQUIRED for Netlify ↔ Render
      maxAge: 7 * 24 * 60 * 60 * 1000,
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
    const user = await User.register(new User({ username, email }), password);
    res.json({ success: true, user: { id: user._id, username: user.username } });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({
    success: true,
    user: { id: req.user._id, username: req.user.username },
  });
});

app.get("/logout", (req, res) => {
  req.logout(() => {
    req.session.destroy(() => {
      res.clearCookie("connect.sid");
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
