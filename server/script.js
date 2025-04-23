const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const notFoundRoute = require("./middlewares/notFoundRoute");
const customError = require("./utils/customError");
const authRoute = require("./routes/auth.routes");
const app = express();

// config environmental variables
dotenv.config();

// Port varialbe
const port = process.env.PORT || 8000;

// App level middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// API Route
app.use("/api/v1/auth", authRoute);

// Not found route
app.use(notFoundRoute);

// Custom Error
app.use(customError);

// Start a server
const startServer = async () => {
  try {
    await connectDB(process.env.DB_URL_LOCAL);

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}.`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
