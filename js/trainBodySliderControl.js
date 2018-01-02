/*
strengthTraining (slide)
strengthTrainingValue

toughnessTraining (slide)
toughnessTrainingValue

remainingValue
*/

function setStr(value){
  strVal = parseInt(value);
  //ugly code to prevent more than 100%
  if((strVal+speedVal+toughVal) >= 100){
    strVal = 100 - toughVal - speedVal;
    $('#strengthTraining').val(strVal);
    $('#strengthTraining').trigger('change');
  }

  $('#strengthTrainingValue').text(strVal);
  $('#remainingValue').text(100-strVal-toughVal-speedVal);
}


function setTough(value){
  toughVal=parseInt(value);
  //copy pasted ugly code
  if((strVal+speedVal+toughVal) >= 100){
    toughVal = 100 - strVal - speedVal;
    $('#toughnessTraining').val(toughVal);
    $('#toughnessTraining').trigger('change');
  }
  $('#toughnessTrainingValue').text(toughVal);
  $('#remainingValue').text(100-strVal-toughVal-speedVal);

}


function setSpeed(value){
  speedVal=parseInt(value);
  //copy pasted ugly code
  if((strVal+speedVal+toughVal) >= 100){
    speedVal = 100 - strVal - toughVal;
    $('#speedTraining').val(speedVal);
    $('#speedTraining').trigger('change');
  }
  $('#speedTrainingValue').text(speedVal);
  $('#remainingValue').text(100-strVal-toughVal-speedVal);

}
//TODO: add control for other sliders in game.html

function loadTrainBodyView(){

  $('#strengthTraining').val(strVal);
  $('#strengthTraining').trigger('change');
  $('#strengthTrainingValue').text(strVal);

  $('#toughnessTraining').val(toughVal);
  $('#toughnessTraining').trigger('change');
  $('#toughnessTrainingValue').text(toughVal);

  $('#speedTraining').val(speedVal);
  $('#speedTraining').trigger('change');
  $('#speedTrainingValue').text(speedVal);

  $('#remainingValue').text(100-strVal-toughVal-speedVal);
}

//default values
loadTrainBodyView();
