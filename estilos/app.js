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

var modal = $('.modal'),
    height = modal.height(), // height
    innerHeight = modal.innerHeight(), // + padding
    outerHeight = modal.outerHeight(), // + border
    outerHeightMargin = modal.outerHeight(true); // + Margin

console.log('Height: ' + height,
            ' Inner: ' + innerHeight,
            ' Outer: ' + outerHeight,
            ' Outter + Margin: ' + outerHeightMargin);

var windowHeight = $(window).height();
console.log(windowHeight);