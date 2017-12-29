var paused = false;
var game = new Game();

function initGameView(){
  getCultivation();
  getTimeSpent();
}

function CultivateClick(value){
  game.kiCultivation.ki = game.kiCultivation.ki + value;
  getCultivation();
}

function getCultivation(){
  $('#cultivation').html("<p>ki gathered: " + game.kiCultivation.ki+"</p>");
}

function TimePassing(){
  game.timeSpent = game.timeSpent + 1;
  }

function getTimeSpent(){
  $('#timeSpent').html("<p>year "+ Math.floor(game.timeSpent/52) +", week "+ (game.timeSpent%52 + 1) +"</p>");
}




window.setInterval(function(){
  TimePassing();
  getTimeSpent();
}, 1000);
