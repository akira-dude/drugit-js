﻿$(document).ready(function(){
	var d = $('.drugit');
	d.mousedown(function(){
		var IE = document.all?true:false
		if (!IE) document.captureEvents(Event.MOUSEMOVE)
		document.onmousemove = getMouseXY;
		var tempX = 0;
		var tempY = 0;
		function getMouseXY(e) {
			if (IE) {
				tempX = event.clientX + document.body.scrollLeft
				tempY = event.clientY + document.body.scrollTop
			}else{
				tempX = e.pageX
				tempY = e.pageY
			}
			if (tempX < 0){tempX = 0}
			if (tempY < 0){tempY = 0}
			d.css('position', 'absolute');
			d.css('top', tempY);
			d.css('left', tempX);
		}
		console.log('down');
	});
	$(document).mouseup(function(){
		console.log('up');
		//	
	});
	
})
//	вычислять отступ драгбл блока от начала экрана и совокупять это значение с позицией мыши
//	вычислять позицию мыши по отношению к драгбл блоку
//	console.log();