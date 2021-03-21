var offsetModal = $(".modal").offset();
console.log(offsetModal);

var offsetA = $("a").offset().top;
console.log(offsetA);

var offsetP = $("p").offset().left;
console.log(offsetP);

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    console.log(scrollTop);
});

$('.btn').click(function(e) {
    e.preventDefault()
    $(window).scrollTop(0);
});