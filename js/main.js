var paused = false;
var game = new Game();
var derp = 3;

/*
sliderControl.js
distribution of the time
*/
var restVal = 50;
var btVal = 50;

/*
trainBodySliderControl.js
improvement distribution of the body training
*/
var strVal = 50;
var toughVal = 50;


function initKiView(){
  getCultivation();
  getTimeSpent();
}



function cultivateClick(){
  game.kiCultivation.ki = game.kiCultivation.ki + game.kiCultivation.cultivateClickValue;
  getCultivation();
  if(game.kiCultivation.ki >= 15)
    $('#adventure').removeClass("invisible");
}

function getCultivation(){
  $('#cultivation').text(game.kiCultivation.ki);
}

function TimePassing(){
  game.timeSpent = game.timeSpent + 1;
  }

function getTimeSpent(){
  //$('#timeSpent').html("<p>year "+ Math.floor(game.timeSpent/52) +", week "+ (game.timeSpent%52 + 1) +"</p>");
  $('#timeSpentYear').text(Math.floor(game.timeSpent/52));
  $('#timeSpentWeek').text(game.timeSpent%52 + 1);
}

function overTimeBodyCultivation(){
  game.bodyCultivation.strength = game.bodyCultivation.strength + (btVal/100)*(strVal/100);
  game.bodyCultivation.toughness = game.bodyCultivation.toughness + (btVal/100)*(toughVal/100);
}

function getBodyTraining(){
    var strengthDisplay = game.bodyCultivation.strength.toFixed(2);
    $('#bodyTrainingStrength').text(strengthDisplay);

    var toughDisplay = game.bodyCultivation.toughness.toFixed(2);
    $('#bodyTrainingToughness').text(toughDisplay);

    if(game.bodyCultivation.strength >= 5 && game.bodyCultivation.toughness >= 5)
      $('#trainKi').removeClass("invisible");
}

window.setInterval(function(){
  //mechanics
  TimePassing();
  overTimeBodyCultivation();

  //displays
  getTimeSpent();
  getBodyTraining();

}, 1000);
