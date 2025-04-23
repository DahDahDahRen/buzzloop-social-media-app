const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 16,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPhoto: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      maxLength: 160,
      default: "Create your bio",
    },
  },
  {
    timestamps: true,
  }
);

// Hash password
userSchema.pre("save", async function (next) {
  // Check if password is modified
  if (!this.isModified("password")) return next();

  // Hash user password
  this.password = await bcrypt.hash(this.password, 10);

  // Go to next middleware
  next();
});

// Comapre password
userSchema.methods.comparePassword = function (userPassword) {
  // Check password and return the result
  return bcrypt.compare(userPassword, this.password);
};

// Compile into a model
const User = mongoose.model("User", userSchema);

module.exports = User;
