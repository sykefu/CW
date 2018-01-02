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
  if((strVal+toughVal) >= 100){
    strVal = 100 - toughVal;
    $('#strengthTraining').val(strVal);
    $('#strengthTraining').trigger('change');
  }

  $('#strengthTrainingValue').text(strVal);
  $('#remainingValue').text(100-strVal-toughVal);
}


function setTough(value){
  toughVal=parseInt(value);
  //copy pasted ugly code
  if((strVal+toughVal) >= 100){
    toughVal = 100 - strVal;
    $('#toughnessTraining').val(toughVal);
    $('#toughnessTraining').trigger('change');
  }
  $('#toughnessTrainingValue').text(toughVal);
  $('#remainingValue').text(100-strVal-toughVal);

}
//TODO: add control for other sliders in game.html

function loadTrainBodyView(){

  $('#strengthTraining').val(strVal);
  $('#strengthTraining').trigger('change');
  $('#strengthTrainingValue').text(strVal);

  $('#toughnessTraining').val(toughVal);
  $('#toughnessTraining').trigger('change');
  $('#toughnessTrainingValue').text(toughVal);

  $('#remainingValue').text(100-strVal-toughVal);
}

//default values
loadTrainBodyView();
