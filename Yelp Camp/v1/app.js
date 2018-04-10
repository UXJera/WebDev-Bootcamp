const express = require('express');
const app = express();
const ejs = require('ejs');
const request = require('request');
const bodyParser = require('body-parser');

// Demo URL: https://farm9.staticflickr.com/8358/8444469474_8f4b935818.jpg

let campgrounds = [
  {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7042/7121867321_65b5f46ef1.jpg"},
  {name: "Granite Hill", image: "https://farm8.staticflickr.com/7268/7121859753_e7f787dc42.jpg"},
  {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6105/6381606819_df560e1a51.jpg"}
];

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('landing');
});

// Show all the campgrounds
app.get('/campground', function(req,res){
  res.render('campground', {campgrounds: campgrounds});
});

// Where we send the post request to create a new campground
app.post('/campground', function(req, res){
  // Get data from form and add to campgrounds array
  let campName = req.body.name;
  let campImage = req.body.image;
  let newCampground = {name: campName, image: campImage};
  campgrounds.push(newCampground);
  // Redirect to /campground
  res.redirect('/campground'); // Default is to redirect as a GET request
});

// Show new campsite form
app.get('/campground/new', function(req, res){
  res.render('new.ejs');
});

app.listen(8080, function(){
  console.log('YelpCamp App is online');
});
