const fetch = require("node-fetch");

const getCarsResult = (req, res) => {
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
      console.log(objCars);
      res.json(objCars);
    });
};

module.exports = getCarsResult;
