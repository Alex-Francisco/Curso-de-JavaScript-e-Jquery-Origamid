/*
$('a').each(function(){
    $(this).click(function(e){
        e.preventDefault()
        $(this).css('background', 'blue');
    });
});

$('h2').click(function(){
    $(this).closest('div').css('background', 'blue');
});

$('h2').click(function(){
    console.log($(this).parents());
});

$('section').click(function(){
    $(this).find('p').css('background', 'blue');
});
*/
$('.btn').first().css('background', 'blue');
$('.btn').last().css('background', 'red');
$('.btn').prev().css('background', 'pink');
$('a').eq(0).css('background', 'green');
