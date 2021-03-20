/*$('a').click(function(){
    $('.abrir-modal').text('Clicou');
});*/

//ou assim

/*
$('a').on('click', function() {
    $('.abrir-modal').text('Clicou');
});
*/

/*
$('a').on('mouseenter', function(event) {
    event.preventDefault();
    $(this).text('Mouse no botão');
});

$('a').on('mouseleave', function(event) {
    event.preventDefault();
    $(this).text('Mouse fora');
});
*/

/*
$(document).on('scroll', function() {
    $('a').text($(document).scrollTop());
});
*/

$(window).on('resize', function() {
    $('a').text($('body').width());
});

