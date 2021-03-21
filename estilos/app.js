/*
var psize = $('p').css('font-size');
console.log(psize);

var bg = $('.btn').css('background');
console.log(bg);

$('.modal').css({
    'background-color': '#ccc',
    'width': '200px'
});
*/

$(document).scroll(function() {
    var documentTop = $(this).scrollTop();
    $('.modal').css('height', documentTop * 5)
})

var width = $('.modal').width();
console.log(width);