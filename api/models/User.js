const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minlength: [6, "Minimum password length is 6 characters"],
    },
  },
  { timestamps: true }
);

//function call after doc save to db
// UserSchema.post("save", function (doc, next) {
//   console.log("New user was created & saved", doc);
//   next();
// });

//function call before doc saved

UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//static method to login user

UserSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    console.log(auth);
    if (auth) {
      return user;
    }
    throw Error("Incorrect password");
  }
  throw Error("incorrect email");
};
module.exports = mongoose.model("User", UserSchema);
