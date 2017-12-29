$(function() {
    $('#home').click(function() {
        $('#main').load('game.html');
        return false;
    });
});

$(function() {
    $('#links').click(function() {
        $('#main').load('options.html');
        return false;
    });
});
