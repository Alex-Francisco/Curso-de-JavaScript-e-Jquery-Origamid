$(document).ready(function(){

    console.log($('.abrir-modal').data('height'));

    var velocidade = $('.abrir-modal').data('velocidade');
    if(velocidade == 'slow') {
        $('a').slideUp(1000);
    } else if (velocidade == 'fast') {
        $('a').slideUp(500);
    }

    setTimeout(function(){
        $('a').css('background', 'blue')
        if(velocidade == 'slow') {
            $('a').slideDown(2000);
        } else if (velocidade == 'fast') {
            $('a').slideDown(1000);
        }
    },2000)
});