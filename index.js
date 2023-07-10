const express = require("express");
const app = express();
const port = 3210;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./router");
const cors = require("cors");
const db = require("./db/connection");
const path = require("path");

// Add Middleware
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false, limit: "10mb" }));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(morgan("dev"));

// Main Route
app.use("/", router);

// Running Port
app.listen(port, () => {
  // Command : npm run dev
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
});
