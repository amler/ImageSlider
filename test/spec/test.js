/* global describe, it */

(function () {
    'use strict';
    		//describe the name of the function aka name
    describe('Image Slider', function () {
        describe('Image slider with images', function () {
            
            it('should inject the correct number of image tags', function () {
            	var total = $('.container .pics').length
            	console.log(total);
            	expect(total).to.equal(myImageArray.length)
            });
        });
    });

    describe('Image Interval', function () {
        describe('each image is rendered', function () {
            it('should display each image in a set time', function () {

            });
        });
    });
	

	describe('Give it some context', function () {
	        describe('validate data', function () {
	            it('should make sure its a string of urls', function () {

	            });
	        });
	    });


})();
