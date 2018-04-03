var express = require('express');
var app = express();
var request = require('request');

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Movie app has started!");
})

app.get('/results', function(req, res){
  request('http://omdbapi.com/?s=california&apikey=thewdb', function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })
})








// request('https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/BombRewindBomb?api_key=RGAPI-e7e35dd6-6932-4939-8e1d-895835850764',
// function(error, response, body) {
//   if (!error && response.statusCode == 200) {
//     var data = JSON.parse(body);
//     console.log("Summoner Name: " + data.name);
//     console.log("Summoner Level: " + data.summonerLevel);
//   }
// });
