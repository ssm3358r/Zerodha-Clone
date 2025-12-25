require("dotenv").config();
const jwt = require("jsonwebtoken");

let _warnedMissingSecret = false;

module.exports.createSecretToken = (id) => {
  const secret = process.env.TOKEN_KEY || process.env.JWT_SECRET || null;

  if (!secret && !_warnedMissingSecret) {
    console.warn(
      "WARNING: TOKEN_KEY / JWT_SECRET is not set. Using a temporary development secret."
    );
    _warnedMissingSecret = true;
  }

  const usedSecret = secret || `dev_secret_${process.env.NODE_ENV || "local"}`;

  return jwt.sign({ id }, usedSecret, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};