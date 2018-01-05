/*
source (french) : http://sohtanaka.developpez.com/tutoriels/javascript/creez-fenetre-modale-avec-css-et-jquery
*/

/*
-soit on fait différentes popups et on passe le contenu en attribut de la fonction (titre+texte)
-soit on fait plusieurs popups et on passe le nom de la popup en attribut
*/

function openPopup(pTitle,pContent) {
	var popID = "popup"; //name of the popup
	var popWidth = $(this).data('width'); //find width

  //add content to the popup
  $("#popupTitle").text(pTitle);
  $("#popupContent").text(pContent);

	//show popup and add close button
	$('#' + popID).fadeIn().css({ 'width': popWidth}).prepend('<span class="close"><img src="img/close_pop.png" class="btn_close" title="Close Window" alt="Close" /></span>');

	//get marginto center windows - on ajuste de 80px en conformité avec le CSS
	var popMargTop = ($('#' + popID).height() + 80) / 2;
	var popMargLeft = ($('#' + popID).width() + 80) / 2;

	//Apply Margin to Popup
	$('#' + popID).css({
		'margin-top' : -popMargTop,
		'margin-left' : -popMargLeft
	});

	//Apparition du fond - .css({'filter' : 'alpha(opacity=80)'}) pour corriger les bogues d'anciennes versions de IE
	$('body').append('<div id="fade"></div>');
	$('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn();

	return true;
}

jQuery(function($){
	//Close Popups and Fade Layer
	$('.popup_block').on('click', '.close, #fade', function() { //click on body then...
    console.log("gotta go fade");
		$('#fade , .popup_block').fadeOut(function() {
			$('#fade, a.close').remove();
    }); //...everything fade out
	});
});
