/*$('a').click(function(){
    $('.abrir-modal').text('Clicou');
});*/

//ou assim

$('a').on('click', function() {
    $('.abrir-modal').text('Clicou');
});
