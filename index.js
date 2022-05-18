const express = require("express");
const app = express();
const fetch = require("node-fetch");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

// Cors
app.use(cors());
app.options("*", cors());

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Titanic</h1>");
});

app.get("/titanic", (req, res) => {
  console.log(req.body);

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
            "0",
            "1",
            "3",
            "Steven",
            "male",
            "20",
            "1",
            "1",
            "0",
            "15.7417",
            "0",
            "C",
          ],
        ],
      },
    },
    GlobalParameters: {},
  };

  // Fetching data with the method post
  fetch(
    "https://ussouthcentral.services.azureml.net/workspaces/446ceb25bd7c47a3915cb4d8e9a53779/services/86be80ad7e2846e1900e48fcdcc0ed22/execute?api-version=2.0",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer XujZDtRpX6AJdFGL5NjSHHguE6GGDKOkKQHTGLmVnTEvAQ5ZEoXgi3wrgq4iHAWeKYQgVFVLrdUp1btexEmRhg==",
        Accept: "application/json",
      },
    }
  )
    .then((res) => res.text())
    .then((data) => {
      res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
