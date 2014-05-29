var myImageArray = [
	"http://goo.gl/X88VdC",
	"http://goo.gl/vjMK2c",
	"http://goo.gl/B6Yg7e"
];

var current = 0;
var targetDiv = $('.slides');
var displayTime = 1000;

function Slideshow (array) {

	this.renderImage = function () {
							array.forEach(function (photo) {
	    						targetDiv.append('<img class = "pics" src=' + photo  + ' />');
							});
						};
	//this.imgSlide =					

}


var arrayValidator = function(array){
	if (!$.isArray(array)) {
		throw new Error ('Not an array!');
	} else if (array.length <= 0) {
		throw new Error ('Empty image array.');
	}
	else {
		var imageSlider = new Slideshow(array);
		imageSlider.renderImage();
	}
}

arrayValidator(myImageArray);


/*var current = 0;

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
	if ( current >= myImageArray.length ) {
		current = 0;
	}
	// move back -400 for current 
	var position = current * -400;

	$('.slides').animate({marginLeft: position}, 500);	
}*/

