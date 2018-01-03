
//TODO: add a min rest value, will make it dependant on how op you are later.
function setRest(value){
  restVal = parseInt(value);
  //ugly code to prevent more than 100%
  if(restVal < minRest){
    $('#rest').val(minRest);
    return -1;
  }
  if((restVal+btVal) >= 100){
    restVal = 100 - btVal;
    $('#rest').val(restVal);
    $('#rest').trigger('change');
  }

  $('#restValue').text(restVal);
  $('#remainingTimeValue').text(100-restVal-btVal);
}


function setBT(value){
  btVal=parseInt(value);
  //copy pasted ugly code
  if((restVal+btVal) >= 100){
    btVal = 100 - restVal;
    $('#bodyTraining').val(btVal);
    $('#bodyTraining').trigger('change');
  }
  $('#bodyTrainingValue').text(btVal);
  $('#remainingTimeValue').text(100-restVal-btVal);

}
//TODO: add control for other sliders in game.html

function loadGameView(){

  $('#rest').val(restVal);
  $('#rest').trigger('change');
  $('#restValue').text(restVal);

  $('#bodyTraining').val(btVal);
  $('#bodyTraining').trigger('change');
  $('#bodyTrainingValue').text(btVal);

  $('#remainingTimeValue').text(100-restVal-btVal);
}
//default values
loadGameView();
