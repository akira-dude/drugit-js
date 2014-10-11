$(document).ready(function(){
	var d = $('.drugit');
	var flag;
    d.on('mousedown', function(e) {
        var start = {
            top:parseInt($(this).css('top').replace(/px/,'')),
            left: parseInt($(this).css('left').replace(/px/,''))
        };
        var mouse = {top:e.clientY, left:e.clientX};
        var el = $(this);
        el.addClass('dragged');
        $(window).on('mousemove',function(mme) {
            var end = {
                Y:start.top + mme.clientY - mouse.top,
                X:start.left + mme.clientX - mouse.left
            }
            el.css({top:end.Y+'px', left:end.X+'px'});
        }).on('mouseup, mouseout, click',function() {
            el.removeClass('dragged');
            $(window).off('mousemove');
        });
        return false;
    }); 
	
})
