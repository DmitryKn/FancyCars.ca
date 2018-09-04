const express = require('express');
const app = express();
const data = require('./public/cars');

//======= APP CONFIG ======
app.use(express.static('public'));


//======= ROUTES ======
// test
// localhost:5000/
app.get('/', (req, res) => res.send("Hello"));

// Get data from cars.json
// localhost:5000/cars
app.get('/cars', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(data);
})

// parsing cars.json: id + availability
// localhost:5000/cars/availability
app.get('/cars/availability', function (req, res) {
  var str = JSON.stringify(data)
  var parsed = JSON.parse(str);
  var result = ''
  for(let x in parsed){
    result += `${parsed[x].id} ${parsed[x].available} `
  }
  res.send(result)
});



//Server port listening
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
