window.onload = function(){
	var container=document.getElementById("container");
	var lists = container.getElementsByTagName("img");
	var imgWidth = lists[0].offsetWidth; // 获取图片的宽度
	// 设置图片的初始位置。
	function oriPos(){
		for(var i=1;i<lists.length;i++){
			lists[i].style.left = imgWidth + 100*(i-1) + "px";
		}
	}
	oriPos();	
	// 图片滑动的距离
	var translate = imgWidth-100;
	for(var i=0;i<lists.length;i++){
		(function(i){
			lists[i].onmouseover = function(){
				// 图片复位
				oriPos();
				// 移到第三张，需要移动第2、3张，移到第4张，需要移动第2、3、4张
				for(var j=1;j<=i;j++){
					lists[j].style.left = parseInt(lists[j].style.left)-translate + "px"
				}	
			}
		})(i)
	}
}