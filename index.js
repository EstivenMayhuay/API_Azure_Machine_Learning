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

  // Fetching data of passengers with the method post
  fetch(process.env.URL_TITANIC_AML, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.API_KEY_TITANIC_AML,
      Accept: "application/json",
    },
  })
    .then((res) => res.text())
    .then((body) => {
      const data = JSON.parse(body);
      const value = data.Results.output1.value.Values[0];
      const objSurvived = {
        survived: value[0],
        pclass: value[1],
        sex: value[2],
        age: value[3],
        sibsp: value[4],
        parch: value[5],
        fare: value[6],
        embarked: value[7],
        scoreLabel: value[8],
        scoreProbability: value[9],
      };
      console.log(objSurvived);
      res.json(objSurvived);
    });
});

app.post("/cars", (req, res) => {
  const {
    symboling,
    normalizedLosses,
    make,
    fuelType,
    aspiration,
    numDoors,
    bodyStyle,
    driveWheels,
    engineLocation,
    wheelBase,
    lengthCar,
    widthCar,
    heightCar,
    curbWeight,
    engineType,
    numCylinders,
    engineSize,
    fuelSystem,
    bore,
    stroke,
    compressionRatio,
    horsepower,
    peakRpm,
    cityMpg,
    highwayMpg,
    price,
  } = req.body;

  const data = {
    Inputs: {
      input1: {
        ColumnNames: [
          "symboling",
          "normalized-losses",
          "make",
          "fuel-type",
          "aspiration",
          "num-of-doors",
          "body-style",
          "drive-wheels",
          "engine-location",
          "wheel-base",
          "length",
          "width",
          "height",
          "curb-weight",
          "engine-type",
          "num-of-cylinders",
          "engine-size",
          "fuel-system",
          "bore",
          "stroke",
          "compression-ratio",
          "horsepower",
          "peak-rpm",
          "city-mpg",
          "highway-mpg",
          "price",
        ],
        Values: [
          [
            symboling,
            normalizedLosses,
            make,
            fuelType,
            aspiration,
            numDoors,
            bodyStyle,
            driveWheels,
            engineLocation,
            wheelBase,
            lengthCar,
            widthCar,
            heightCar,
            curbWeight,
            engineType,
            numCylinders,
            engineSize,
            fuelSystem,
            bore,
            stroke,
            compressionRatio,
            horsepower,
            peakRpm,
            cityMpg,
            highwayMpg,
            price,
          ],
        ],
      },
    },
    GlobalParameters: {},
  };

  // Fetching data of cars with the method post
  fetch(process.env.URL_CARS_AML, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.API_KEY_CARS_AML,
      Accept: "application/json",
    },
  })
    .then((res) => res.text())
    .then((body) => {
      const data = JSON.parse(body);
      const value = data.Results.output1.value.Values[0];
      const objCars = {
        make: value[0],
        "body-style": value[1],
        "wheel-base": value[2],
        "engine-size": value[3],
        horsepower: value[4],
        "peak-rpm": value[5],
        "highway-mpg": value[6],
        price: value[7],
        scoreLabel: value[8],
      };
      res.json(objCars);
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
