window.onload =function(){
	var container = document.getElementById("container");
	var lists = document.getElementById("lists");
	var buttons = document.getElementById("buttons").getElementsByTagName("li");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");
	var index = 1;
	function move(x){
		var newLeft = parseInt(lists.style.left)+x;
		lists.style.left = newLeft + "px";
		if(newLeft>0){
			lists.style.left = -1280 + "px"
		}
		if(newLeft<-1280){
			lists.style.left = 0 + "px"
		}
	}
	function buttonsShow(){
		for(var i=0;i<buttons.length;i++){
			if(buttons[i].className="on"){
				buttons[i].className = ""
			}
		}
		buttons[index-1].className = "on"
	}
	prev.onclick = function(){
		index-=1;
		if(index<1){
			index=3
		}
		move(640);
		buttonsShow()
	}
	next.onclick = function(){
		index+=1;
		if(index>3){
			index=1
		}
		move(-640);
		buttonsShow()
	}
	var timer;
	function play(){
		timer = setInterval(function(){
			next.onclick()
		},1500)
	}
	play();
	function stop(){
		clearInterval(timer)
	}
	container.onmouseover = stop;
	container.onmouseout = play;
	for(var j=0;j<buttons.length;j++){
		(function(j){
			buttons[j].onmouseover = function(){
				var mouseIndex = parseInt(this.getAttribute("index"));
				var x = 640*(index-mouseIndex);
				move(x);
				index = mouseIndex;
				buttonsShow()
			}
		})(j)
	}
}