$(function(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = !!window.ActiveXObject || "ActiveXObject" in window;  //判断是否IE浏览器
    var isEdge = userAgent.indexOf("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome") > -1 && !isIE; //判断是否IE的Edge浏览器  
    if(!!window.ActiveXObject || "ActiveXObject" in window || isEdge){
        $("#myStyle").attr("href","css/static.css")
    }else{
        $("#myStyle").attr("href","css/rotate.css")
    }
	// 导航栏
    $("ul.list").hide();
    $("ul.list").parent().hover(function(){
        $(this).find(".list").stop(true,false).slideDown("fast");
    },function(){
         $(this).find(".list").stop(true,false).slideUp("fast");
    });
    // 鼠标移上去周围球停止旋转，自身开始转
    $('.ball_base,.ball_base a,.ball,.ball_c,.base').mouseover(function(){
        $(".base").addClass('pauseWalk');
        $(".ball").addClass('pauseWalk');
    }).mouseout(function(){
        $(".base").removeClass('pauseWalk');
        $(".ball").removeClass('pauseWalk');
    });

})
