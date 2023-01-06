const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const PORT = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");
dotenv.config();

const app = express();

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("db connection successful");
  })
  .catch((err) => console.log(err));

//middleware routes
app.use(
  cors({
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    origin: ["http://localhost:3000"],
  })
);
app.use(express.json());
app.use(cookieParser());

//routes
app.get("/", (req, res) => {
  res.redirect("http://localhost:3000/login");
});
app.get("/api/verify", requireAuth, (req, res) => {
  res.send({ jwt: "verified" });
});
app.get("/api/lo");

app.use(authRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("backend server is running on port " + PORT);
});
