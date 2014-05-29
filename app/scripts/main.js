var myImageArray = [
	"http://goo.gl/X88VdC",
	"http://goo.gl/vjMK2c",
	"http://goo.gl/B6Yg7e"
];


function Slideshow (array) {
	this.renderImage = function () {
							myImageArray.forEach(function (photo) {
	    						$('.slides').append('<img class = "pics" src=' + photo  + ' />');
							});
						}

};

var arrayValidator = function(array){
	if (!$.isArray(array)) {
		throw new Error ('Not an array!');
	} else if (array.length <= 0) {
		throw new Error ('Empty image array.');
	}
	else {
		var imageSlider = new Slideshow(array);
	}
}
arrayValidator(myImageArray);




/*function createSlideshow () {
	
	myImageArray.forEach(function (photo) {
	    $('.slides').append('<img class = "pics" src=' + photo  + ' />');
	});
	// after rendering set interval
	//var myVar = setInterval(function(){slidePic()}, 1000);
}*/


/*var imagegGallery = new Slideshow*/

/*
var current = 0;



createSlideshow();

function slidePic () {
	// count up 1
	current +=1;
	// after counting up to the length of the array reset.
	if (current>= myImageArray.length) {
		current = 0;
	}
	// move back -400 for current 
	var position = current * -400;

	$('.slides').animate({marginLeft: position}, 500);	
}
*/