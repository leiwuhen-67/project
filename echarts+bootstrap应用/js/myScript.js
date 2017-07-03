$(function(){
	$(".dropdown-toggle").mouseover(function(){
		$(this).css({"color":"#fff"})
	})
	.click(function(){
		$(this).css({"color":"#fff"})
	});
	$(".datepicker").datepicker().css({
		"width":"110px",
		"height":"28px",
		"border":"1px solid #d8d8d8",
		"border-radius":"4px",
		"text-indent":"5px",
		"background-color":"rgba(255, 255, 255, 1)",
		"font-family": "'Helvetica Neue Regular', 'Helvetica Neue'",
	    "font-weight": "400",
	    "font-style": "normal",
	    "font-size": "12px",
	    "color": "#666"
	});
	$(".detail").hover(function(){
		$(this).css({"text-decoration":"none","color":"#3A85C6"})
	})
})