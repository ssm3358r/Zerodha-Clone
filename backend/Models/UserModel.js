const { model } = require("mongoose");
const { UserSchema } = require("../schemas/UserSchema");

const bcrypt = require("bcryptjs");

// Hash password before saving when it's new or modified
UserSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;