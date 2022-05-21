const fetch = require("node-fetch");

const getTitanicResults = (req, res) => {
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
};

module.exports = getTitanicResults;
