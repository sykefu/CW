$(function() {
    $('#game').click(function() {

        //chargement du contenu de la pge
        $('#main').load('views/game.html');

        //changement du lien actif
        $('li,#trainBody').removeClass('active');
        $('li,#trainKi').removeClass('active');
        $('li,#adventure').removeClass('active');
        return false;
    });
});


$(function() {
    $('#trainBody').click(function() {
        $('#main').load('views/trainBody.html');
        $('li,#trainBody').addClass('active');
        $('li,#trainKi').removeClass('active');
        $('li,#adventure').removeClass('active');
        return false;
    });
});


$(function() {
    $('#trainKi').click(function() {
        $('#main').load('views/trainKi.html');
        $('li,#trainKi').addClass('active');
        $('li,#trainBody').removeClass('active');
        $('li,#adventure').removeClass('active');
        return false;
    });
});


$(function() {
    $('#adventure').click(function() {
        $('#main').load('views/adventure.html');
        $('li,#adventure').addClass('active');
        $('li,#trainBody').removeClass('active');
        $('li,#trainKi').removeClass('active');
        return false;
    });
});
