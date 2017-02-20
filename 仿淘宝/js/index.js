window.onload = function(){
	var oCon = document.getElementById('topNav');
	var oIcon = document.getElementById('icon');
	var aLi = oIcon.getElementsByTagName('li');
	var aDfl = $('.dfl');
	var aP = $('.dfl>p>a');
	var oIcon = document.getElementById('icon');
	var zindex = 0;
	var aGoodShop = document.getElementsByClassName('good-shop');

	var arr = ['url(images/icon/001.png)','url(images/icon/002.png)','url(images/icon/003.png)','url(images/icon/004.png)',
	           'url(images/icon/005.png)','url(images/icon/006.png)','url(images/icon/007.png)','url(images/icon/008.png)',
	           'url(images/icon/009.png)','url(images/icon/010.png)','url(images/icon/011.png)','url(images/icon/012.png)'];
	var col = ['#f5619c','#aa73d1','#97b921','#f5619c','#10c2ce','#52a0e8','#aa73d1','#f5619c',
	           '#b68571','#b68571','#97b921','#b68571','#529fe7','#96b821','#97b921','#10c2ce'];
	for(var i=0;i<aLi.length;i++){
		aLi[i].style.backgroundImage = arr[i];
		aLi[i].style.backgroundRepeat = "no-repeat";
		aLi[i].style.backgroundPosition = "2px 2px";
	}

	for(var i=0;i<aDfl.length;i++){ 
		aDfl[i].style.background = col[i];
		aP[i].style.color = col[i];
	}
	for(var i=0;i<aGoodShop.length;i++){
		(function(num){
			aGoodShop[num].onmouseover = function(){
				this.style.marginBottom = 0+"px";
			}
		})(i);
	}



}