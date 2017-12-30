
//TODO: add a min rest value, will make it dependant on how op you are later.
function setRest(value){
  restval = parseInt(value);
  //ugly code to prevent more than 100%
  if((restval+btval) >= 100){
    restval = 100 - btval;
    $('#rest').val(restval);
    $('#rest').trigger('change');
  }

  $('#restvalue').html(restval+"%");
}


function setBT(value){
  btval=parseInt(value);
  //copy pasted ugly code
  if((restval+btval) >= 100){
    btval = 100 - restval;
    $('#bodytraining').val(btval);
    $('#bodytraining').trigger('change');
  }
  $('#bodytrainingvalue').html(btval+"%");

}
//TODO: add control for other sliders in game.html

function loadGameView(){

  $('#rest').val(restval);
  $('#rest').trigger('change');
  $('#restvalue').html(restval+"%");

  $('#bodytraining').val(btval);
  $('#bodytraining').trigger('change');
  $('#bodytrainingvalue').html(btval+"%");
}
//default values
loadGameView();
