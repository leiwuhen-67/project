$(function(){
    var slideTimer ;
    $('.nav-inner li').on('mouseover',function(e){
        clearTimeout(slideTimer);
        var current_left    = parseInt($(this).find('a').attr('slide-left'));
        $('.slide-line').animate({'left':current_left+'px'},200,'linear');
    }).on('mouseleave',function(e){
        slideTimer = setTimeout(slideTabOut,200);
    })
})
function slideTabOut(){
    var current_left    = parseInt($('.nav-inner li a.active').attr('slide-left'));
    $('.slide-line').animate({'left':current_left+'px'},200,'linear');
}