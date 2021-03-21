$('img').attr('alt', 'Imagem Castelos');
$('img').removeAttr('alt');

$('#botao').click(function() {
    var nome = $('.nome').val();
    $('.btn').text(nome);
});

$('.btn').click(function(){
    $('input, #botao').remove();
});

