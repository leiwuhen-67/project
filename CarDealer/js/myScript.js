$(function(){
	$(".toggle-container").hide();
  $(".box-toggle").click(function(){
      $(this).find(".toggle-container").toggle("fast");
      $(this).siblings().find(".toggle-container").hide("fast")
  })
});
$(function(){
         $("#returnTop").hide();
      });
      $(window).scroll(function(){ 
         if ($(window).scrollTop()>100){ 
             $("#returnTop").fadeIn(1000); 
         }else{ 
              $("#returnTop").fadeOut(1000); 
              } 
      }); 
      $("#returnTop").click(function(){ 
           $('body,html').animate({scrollTop:0},400); 
           return false; 
      }); 