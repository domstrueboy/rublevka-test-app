const express = require('express');
const app = express();
const port = 5000;

const faker = require('faker');

app.get('/', (request, response) => {
    response.json({
      type: getRandomElement(['HOUSE', 'TOWNHOUSE', 'APPARTMENT', 'ROOM']),
      square: faker.finance.amount(),
      price: faker.commerce.price(),
      furnishType: getRandomElement(['ELITE', 'EURO', 'REGULAR', 'NOTHING']),
      exampleImages: [
        faker.image.city()
      ]
    });
});

app.listen(port, (err) => {
    if (err) {
        return console.log('Something went wrong', err);
    }
    console.log(`Server is listening on ${port}`);
})

function getRandomInt (min, max) {
  return min + Math.floor(Math.random() * (max + 1 - min));
}

function getRandomElement (arr) {
  return arr[getRandomInt(0, arr.length - 1)];
}