/*
 * Created by jiangfeng on 2016/12/17.
 */
$(function(){
    $("ul.list").hide();
    $("ul.list li").hover(function(){
        $(this).css({
            "background":"#0973d4",
            "text-decoration":"underline",
            "color":"#fff"
        });
        $(this).find("a").css({
            "color":"#fff"
        })
    },function(){
        $(this).css({
            "background":"#eee",
            "text-decoration":"none"
        })
        $(this).find("a").css({
            "color":"#122e67"
        })
    })
    $("ul.list").parent().hover(function(){
        $(this).find(".list").stop(true,false).slideDown("fast");
        $(this).css({
            "background":"#eee",
        });
    },function(){
        $(this).find(".list").stop(true,false).slideUp("fast");
        $(this).css({
            "background":"#fff",
        });
    });
    $('#demo2').slideBox({
        direction : 'left',//left,top#方向
        duration : 0.3,//滚动持续时间，单位：秒
        easing : 'linear',//swing,linear//滚动特效
        delay : 8,//滚动延迟时间，单位：秒
        startIndex : 1//初始焦点顺序
    });
    $("div.news3").find("li").css({
        "float":"left",
        "margin":"0 2px"
    });
    $("ul.connect2 .connect2-li1").css({
        "margin-left":"394px"
    })
})