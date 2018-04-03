var summoner = {};
var apiKey = 'api_key=RGAPI-e7e35dd6-6932-4939-8e1d-895835850764';

var movieApi = '&apikey=thewdb';

var request = require('request');
// var acctId = 35291169;
request('https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/BombRewindBomb?api_key=RGAPI-e7e35dd6-6932-4939-8e1d-895835850764',
function(error, response, body) {
  if (!error && response.statusCode == 200) {
    var data = JSON.parse(body);
    console.log("Summoner Name: " + data.name);
    console.log("Summoner Level: " + data.summonerLevel);
  }
});

// request('https://na1.api.riotgames.com/lol/platform/v3/champions/26?api_key=RGAPI-e7e35dd6-6932-4939-8e1d-895835850764', // This makes the request
// function(error, response, body) { // This is the callback
//   if (!error && response.statusCode == 200) {
//     console.log(body);
//   };

  // console.log("Sunset in Hawaii is at ...");
  // request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
  // function(error, response, body) { // This is the callback
  //   if (!error && response.statusCode == 200) {
  //     // console.log(body);// This data returned is a string, so we can't juse ["query"] to start selecting what we want
  //     var parsedData = JSON.parse(body); // JSON.parse() turns the string into a JSON object. We save to variable for easier access
  //     console.log(parsedData.query.results.channel.astronomy.sunset);
  //   };
  // })
