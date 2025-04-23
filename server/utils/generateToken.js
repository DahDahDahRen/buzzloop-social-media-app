const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, status: "Succesful" },
    process.env.JWT_SECRET,
    { expiresIn: "6h" }
  );
};

module.exports = generateToken;
