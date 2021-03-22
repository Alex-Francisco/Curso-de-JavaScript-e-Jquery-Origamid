$('a').click(function() {
    $('.modal')
    .animate({
        borderTopWidth: 20,
        borderBottomWidth: 20,
    }, 1000)
    .animate({
        height: 300,
    }, 1200);
});