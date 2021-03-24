/*
$('.btn').click(function(){
    $('.modal').fadeOut();
});

$('.abrir-modal').click(function(){
    $('.modal').fadeIn();
});

$('.btn').click(function(){
    $('.modal').hide();
});

$('.abrir-modal').click(function(){
    $('.modal').show();
});
*/

/*
$('.btn').click(function(){
    $('.modal').slideUp();
});

$('.abrir-modal').click(function(){
    $('.modal').slideDown();
})
*/

$('a').click(function(){
    $('.modal').slideToggle(function(){
        $('a').css('margin', '50px');
    });
});
