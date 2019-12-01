
// CURSOR TEXT

$(document).mousemove(function(e){
	// $('.cursor-text').css({'top': e.clientY + 10, 'left': e.clientX + 10})
	// $('.cursor-arrow').css({'top': e.clientY, 'left': e.clientX})

	$('.file').mouseover(function(){
		$(this).css({'background':'black'})
	})
	$('.file').mouseout(function(){
		$(this).css({'background':'transparent'})
	})
})