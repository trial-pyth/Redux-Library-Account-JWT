const jwt = require("jsonwebtoken");
const User = require("../models/User");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  //check json web token exists and is verified
  if (token) {
    jwt.verify(token, process.env.JWT_SEC, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("http://localhost:3000/login");
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.send({ jwt: "unverified" });
  }
};

// check  current User

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SEC, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.locals.user = null;
        next();
      } else {
        console.log(decodedToken);
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports = { requireAuth, checkUser };
