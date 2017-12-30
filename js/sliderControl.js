//TODO: find a way to send these to main.js ?


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


//default values
setRest(50);
setBT(50);
