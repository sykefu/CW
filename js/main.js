var myCultivation = new Cultivation();
var timeSpent = 0;

function CultivateClick(value){
  myCultivation.ki = myCultivation.ki + value;
  $('#cultivation').html("<p>ki gathered: " + myCultivation.ki+"</p>");
  getTimeSpent();
  showTime();
}

function getCultivation(){
  return myCultivation.ki;
}

function TimePassing(){
  timeSpent = timeSpent + 1;
  }
function getKi(){

}
function getTimeSpent(){
  $('#timeSpent').html("<p>year "+ Math.floor(timeSpent/52) +", week "+ (timeSpent%52 + 1) +"</p>");
}

<!-- Main game loop -->

window.setInterval(function(){
  TimePassing();
  getTimeSpent();
}, 1000);
