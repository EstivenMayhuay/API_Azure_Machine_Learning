const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
require("dotenv").config();

// Cors
app.use(cors());
app.options("*", cors());

// parse application form data and json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
const titanicRouter = require("./routes/titanic.routes");
const carsRouter = require("./routes/cars.routes");

app.get("/", (req, res) => {
  res.send("<h1>Welcome your API emcody by Machine Learning</h1>");
});

app.get("/test", (req, res) => {
  res.json({ name: "Welcome to EMCODY" });
});

app.use(titanicRouter);
app.use(carsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
