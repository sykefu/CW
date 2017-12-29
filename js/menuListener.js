$(function() {
    $('#trainBody').click(function() {
        //chargement du contenu de la pge
        $('#main').load('game.html');

        //changement du lien actif
        $('li,#trainBody').addClass('active');
        $('li,#trainKi').removeClass('active');
        return false;
    });
});

$(function() {
    $('#trainKi').click(function() {
        $('#main').load('trainKi.html');
        $('li,#trainKi').addClass('active');
        $('li,#trainBody').removeClass('active');
        return false;
    });
});
