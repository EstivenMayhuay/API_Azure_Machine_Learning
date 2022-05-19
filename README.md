# **API Machine Learning**

This is an API Rest of machine learning. In predictive model.

## **Technologies**

- Azure Machine Learning
- Node.js
- Express.js

## **Routes**

### **https://emcodyapiml.herokuapp.com/**

> Show the home of the API

```http
method: GET
```

### **https://emcodyapiml.herokuapp.com/test**

> Show a simple json of test

```http
method: GET
```

### **https://emcodyapiml.herokuapp.com/titanic**

> Return a json object of titanic

```http
method: POST
```

> JSON object

```json
{
  "survived": "1",
  "pclass": "3",
  "sex": "male",
  "age": "20",
  "sibsp": "1",
  "parch": "1",
  "fare": "15.7417",
  "embarked": "C",
  "scoreLabel": "1",
  "scoreProbability": "0.75"
}
```

### **https://emcodyapiml.herokuapp.com/cars**

> Return a json object of titanic

```http
method: POST
```

> JSON object

```json
{
  "make": "saab",
  "body-style": "sedan",
  "wheel-base": "99.1",
  "engine-size": "121",
  "horsepower": "110",
  "peak-rpm": "5250",
  "highway-mpg": "28",
  "price": "15510",
  "scoreLabel": "14099.9218177337"
}
```
