# **API Machine Learning**

This is an API Rest of machine learning. In predictive model.

## **Technologies**

- Azure Machine Learning
- Node.js
- Express.js

## **Routes**

### **https://emcodyapiml.herokuapp.com/**

```http
method: GET
```

> Resonse a html

```html
<h1>Welcome to EMCODY Machine Learning</h1>
```

### **https://emcodyapiml.herokuapp.com/test**

```http
method: GET
```

> Response with a json

```json
{
  "name": "Estiven"
}
```

### **https://emcodyapiml.herokuapp.com/titanic**

```http
method: POST
```

> Format of the Request

```json
{
  "passengerId": "0",
  "survived": "1",
  "pClass": "3",
  "nameUser": "Estiven",
  "sex": "male",
  "age": "20",
  "sibsp": "1",
  "parch": "1",
  "ticket": "0",
  "fare": "15.7417",
  "cabin": "0",
  "embarked": "C"
}
```

> Response with a json

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

```http
method: POST
```

> Format of Request

```json
{
  "symboling": "0",
  "normalizedLosses": "0",
  "make": "saab",
  "fuelType": "0",
  "aspiration": "0",
  "numDoors": "0",
  "bodyStyle": "sedan",
  "driveWheels": "0",
  "engineLocation": "0",
  "wheelBase": "99.1",
  "lengthCar": "0",
  "widthCar": "0",
  "heightCar": "0",
  "curbWeight": "0",
  "engineType": "0",
  "numCylinders": "0",
  "engineSize": "121",
  "fuelSystem": "0",
  "bore": "0",
  "stroke": "0",
  "compressionRatio": "0",
  "horsepower": "110",
  "peakRpm": "5250",
  "cityMpg": "0",
  "highwayMpg": "28",
  "price": "15510"
}
```

> Response with a json

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
