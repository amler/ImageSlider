var myImageArray = [
	"http://goo.gl/X88VdC",
	"http://goo.gl/vjMK2c",
	"http://goo.gl/B6Yg7e"
];

// keep track of which image we're on
var current = 0;

function createSlideshow () {
	
	myImageArray.forEach(function (photo) {
	    $('.slides').append('<img class = "pics" src=' + photo  + ' />')
	});
	// after rendering set interval
	var myVar = setInterval(function(){slidePic()}, 1000);
}

createSlideshow();

function slidePic () {
	// count up 1
	current +=1;
	// after counting up to the length of the array reset.
	if (current>= myImageArray.length) {
		current = 0;
	}
	
	var position = current * -400;

	$('.slides').animate({marginLeft: position}, 500);	
}


