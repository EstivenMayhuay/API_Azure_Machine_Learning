const express = require("express");
const app = express();
const fetch = require("node-fetch");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
require("dotenv").config();

// Cors
app.use(cors());
app.options("*", cors());

app.use(express.json());

// parse application form data and json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Welcome your API emcody by Machine Learning</h1>");
});

app.post("/titanic", (req, res) => {
  const {
    passengerId,
    survived,
    pClass,
    nameUser,
    sex,
    age,
    sibsp,
    parch,
    ticket,
    fare,
    cabin,
    embarked,
  } = req.body;

  const data = {
    Inputs: {
      input1: {
        ColumnNames: [
          "PassengerId",
          "Survived",
          "Pclass",
          "Name",
          "Sex",
          "Age",
          "SibSp",
          "Parch",
          "Ticket",
          "Fare",
          "Cabin",
          "Embarked",
        ],
        Values: [
          [
            passengerId,
            survived,
            pClass,
            nameUser,
            sex,
            age,
            sibsp,
            parch,
            ticket,
            fare,
            cabin,
            embarked,
          ],
        ],
      },
    },
    GlobalParameters: {},
  };

  // Fetching data with the method post
  fetch(process.env.URL_AML, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.API_KEY_AML,
      Accept: "application/json",
    },
  })
    .then((res) => res.text())
    .then((body) => {
      console.log(body);
      res.json(JSON.parse(body));
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
