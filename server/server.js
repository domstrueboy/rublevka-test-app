const express = require('express');
const app = express();
const port = 5000;

const faker = require('faker');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api', (request, response, next) => {
  
  const num = (isNaN(request.query.num)) ? 1 : +request.query.num;
  const dateParam = parseInt(request.query.fromDate);
  let fromDate = (isNaN(dateParam) || dateParam < 0 || dateParam > 10000000000000) ? Date.now() : parseInt(request.query.fromDate);
  const houses = [];

  const random = Math.floor(Math.random()*10);

  for (let i = 0; i < num; i++) {

    fromDate = fromDate - Math.floor(1000*60*60*24*Math.random() * (i+1));

    houses.push({
      id: faker.random.uuid(),
      type: getRandomElement(['HOUSE', 'TOWNHOUSE', 'APPARTMENT', 'ROOM']),
      square: Math.floor(faker.finance.amount()),
      price: Math.floor(faker.commerce.price()) * 10000,
      currency: '$',
      furnishType: getRandomElement(['ELITE', 'EURO', 'REGULAR', 'NOTHING']),
      exampleImages: [
        `https://loremflickr.com/320/240/house,${i + random}`
      ],
      date: new Date(fromDate)
    });
  }

  response.json({
    total: houses.length,
    lastDate: fromDate,
    houses: houses
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