$(function() {
    $('#home').click(function() {
        //chargement du contenu de la pge
        $('#main').load('game.html');

        //changement du lien actif
        $('li,#home').addClass('active');
        $('li,#links').removeClass('active');
        return false;
    });
});

$(function() {
    $('#links').click(function() {
        $('#main').load('options.html');
        $('li,#links').addClass('active');
        $('li,#home').removeClass('active');
        return false;
    });
});
