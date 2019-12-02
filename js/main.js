
// CURSOR TEXT

$(document).mousemove(function(e){
	$('.cursor-text').css({'top': e.clientY + 10, 'left': e.clientX + 10})
})



// SHOW/HIDE DESCRIPTION

$('.main-title').hover(function(){
	$('.desc').css({'opacity':'1'})
}, function(){
	$('.desc').css({'opacity':'0'})
})



// POP-UP WINDOWS

var windowAttr = 'height=620,width=950,left=425,top=167,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes';


// RECORDS

$('.records').mousedown(function(){
	window.open('records/index.html','theRecordsInventory', windowAttr)
})


// SECTION 01

///////// FOLDER A

$('.item.01-a-01').mousedown(function(){
	window.open('items/01/A/01/index.html','itemWindow', windowAttr)
})

$('.item.01-a-02').mousedown(function(){
	window.open('items/01/A/02/index.html','itemWindow', windowAttr)
})

$('.item.01-a-03').mousedown(function(){
	window.open('items/01/A/03/index.html','itemWindow', windowAttr)
})

$('.item.01-a-06').mousedown(function(){
	window.open('items/01/A/06/index.html','itemWindow', windowAttr)
})

$('.item.01-a-08').mousedown(function(){
	window.open('items/01/A/08/index.html','itemWindow', windowAttr)
})

$('.item.01-a-09').mousedown(function(){
	window.open('items/01/A/09/index.html','itemWindow', windowAttr)
})

///////// FOLDER B

$('.item.01-b-04').mousedown(function(){
	window.open('items/01/B/04/index.html','itemWindow', windowAttr)
})

///////// FOLDER C

$('.item.01-c-01').mousedown(function(){
	window.open('items/01/C/01/index.html','itemWindow', windowAttr)
})

$('.item.01-c-02').mousedown(function(){
	window.open('items/01/C/02/index.html','itemWindow', windowAttr)
})

$('.item.01-c-03').mousedown(function(){
	window.open('items/01/C/03/index.html','itemWindow', windowAttr)
})

///////// FOLDER D

$('.item.01-d-01').mousedown(function(){
	window.open('items/01/D/01/index.html','itemWindow', windowAttr)
})

$('.item.01-d-02').mousedown(function(){
	window.open('items/01/D/02/index.html','itemWindow', windowAttr)
})

$('.item.01-d-03').mousedown(function(){
	window.open('items/01/D/03/index.html','itemWindow', windowAttr)
})



// SECTION 02

///////// FOLDER A

$('.item.02-a-01').mousedown(function(){
	window.open('items/02/A/01/index.html','itemWindow', windowAttr)
})

$('.item.02-a-02').mousedown(function(){
	window.open('items/02/A/02/index.html','itemWindow', windowAttr)
})

///////// FOLDER B

$('.item.02-b-01').mousedown(function(){
	window.open('items/02/B/01/index.html','itemWindow', windowAttr)
})

///////// FOLDER C

$('.item.02-c-03').mousedown(function(){
	window.open('items/02/C/01/index.html','itemWindow', windowAttr)
})

$('.item.02-c-04').mousedown(function(){
	window.open('items/02/C/01/index.html','itemWindow', windowAttr)
})

$('.item.02-c-05').mousedown(function(){
	window.open('items/02/C/01/index.html','itemWindow', windowAttr)
})

///////// FOLDER D

$('.item.02-d-01').mousedown(function(){
	window.open('items/02/D/01/index.html','itemWindow', windowAttr)
})

$('.item.02-d-02').mousedown(function(){
	window.open('items/02/D/02/index.html','itemWindow', windowAttr)
})

$('.item.02-d-03').mousedown(function(){
	window.open('items/02/D/03/index.html','itemWindow', windowAttr)
})

$('.item.02-d-04').mousedown(function(){
	window.open('items/02/D/04/index.html','itemWindow', windowAttr)
})

$('.item.02-d-05').mousedown(function(){
	window.open('items/02/D/05/index.html','itemWindow', windowAttr)
})

$('.item.02-d-06').mousedown(function(){
	window.open('items/02/D/06/index.html','itemWindow', windowAttr)
})

///////// FOLDER E

$('.item.02-e-01').mousedown(function(){
	window.open('items/02/E/01/index.html','itemWindow', windowAttr)
})

$('.item.02-e-03').mousedown(function(){
	window.open('items/02/E/03/index.html','itemWindow', windowAttr)
})



// SECTION 03

///////// FOLDER A

$('.item.03-a-01').mousedown(function(){
	window.open('items/03/A/01/index.html','itemWindow', windowAttr)
})

$('.item.03-a-03').mousedown(function(){
	window.open('items/03/A/03/index.html','itemWindow', windowAttr)
})

$('.item.03-a-04').mousedown(function(){
	window.open('items/03/A/04/index.html','itemWindow', windowAttr)
})

$('.item.03-a-05').mousedown(function(){
	window.open('items/03/A/05/index.html','itemWindow', windowAttr)
})

$('.item.03-a-06').mousedown(function(){
	window.open('items/03/A/06/index.html','itemWindow', windowAttr)
})

$('.item.03-a-07').mousedown(function(){
	window.open('items/03/A/07/index.html','itemWindow', windowAttr)
})

$('.item.03-a-08').mousedown(function(){
	window.open('items/03/A/08/index.html','itemWindow', windowAttr)
})

$('.item.03-a-10').mousedown(function(){
	window.open('items/03/A/10/index.html','itemWindow', windowAttr)
})

$('.item.03-a-11').mousedown(function(){
	window.open('items/03/A/11/index.html','itemWindow', windowAttr)
})

$('.item.03-a-12').mousedown(function(){
	window.open('items/03/A/12/index.html','itemWindow', windowAttr)
})

///////// FOLDER B

$('.item.03-b-01').mousedown(function(){
	window.open('items/03/B/01/index.html','itemWindow', windowAttr)
})

$('.item.03-b-02').mousedown(function(){
	window.open('items/03/B/02/index.html','itemWindow', windowAttr)
})

$('.item.03-b-03').mousedown(function(){
	window.open('items/03/B/03/index.html','itemWindow', windowAttr)
})

$('.item.03-b-04').mousedown(function(){
	window.open('items/03/B/04/index.html','itemWindow', windowAttr)
})

///////// FOLDER C

$('.item.03-c-01').mousedown(function(){
	window.open('items/03/C/01/index.html','itemWindow', windowAttr)
})

$('.item.03-c-02').mousedown(function(){
	window.open('items/03/C/02/index.html','itemWindow', windowAttr)
})

$('.item.03-c-04').mousedown(function(){
	window.open('items/03/C/04/index.html','itemWindow', windowAttr)
})

$('.item.03-c-05').mousedown(function(){
	window.open('items/03/C/05/index.html','itemWindow', windowAttr)
})

///////// FOLDER D

$('.item.03-d-01').mousedown(function(){
	window.open('items/03/D/01/index.html','itemWindow', windowAttr)
})

$('.item.03-d-02').mousedown(function(){
	window.open('items/03/D/02/index.html','itemWindow', windowAttr)
})

$('.item.03-d-04').mousedown(function(){
	window.open('items/03/D/04/index.html','itemWindow', windowAttr)
})

