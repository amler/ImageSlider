/* global describe, it */

(function () {
	'use strict';

    describe("imgGenerator()  function", function(){
        describe('Should validate array and render images', function () {
        	var myImageArray = [
				"http://goo.gl/X88VdC",
				"http://goo.gl/vjMK2c",
				"http://goo.gl/B6Yg7e"
			];

	      	it("should only accept an array for images as an argument.", function(){
	        	var emptyArray = function () {
	        		slideshow([]);
	        	}
	        	expect(emptyArray).to.throw(Error)
	      	});

	      	it("should not accept an empty array as an argument.", function(){
	        	var stringArray = function () {
	        		slideshow('string');
	        	}
	        	expect(stringArray).to.throw(Error)
	      	});

	      	it("should only contain 3 images - in case client specific.", function(){
	      	
	        	expect(myImageArray.length).to.equal(3)

	      	});

	      	it("should assert that the target is an instance of constructor.", function(){
        
				var imageSlider = new Slideshow(myImageArray);
				expect(imageSlider).to.be.an.instanceof(Slideshow);
			});
	      	/*
	      	it("should confirm that each array index has a jpeg, jpg, gif, or png extensions.", function(){
				//not sure how to test for it or how to write it.
				var confirmExt = function () {
					slideshow([rfwerf.jpg, rfref.gif])
				}
				expect()
	      	});
			*/
	    });
    });

	describe("Slideshow()", function(){
        describe('Slideshow constructor should have methods', function () {

	      	it("should accept an array as an argument and render each image to the DOM.", function(){
	      		forEac
	      	});
	
})();


/*it("should assert that the target is an instance of constructor.", function(){

		        var imagegallery = new Slideshow();
		        expect(imagegallery).to.be.an.instanceof(Slideshow);
	      	});*/


  /*  describe('Create Slideshow', function () {
            
        it('should inject the correct number of image tags', function () {
        	var imageCount = myImageArray.length;
        	var total = $('.slides .pics').length;
        	console.log(total);
        	expect(total).to.equal(imageCount);
        });
   describe('Slide Pic', function () {
        describe('Images slideshow ', function () {
            it('Images should match the array as the slideshow progresses', function (done) {
				setTimeout( function () {
					slidePic( done, function() {
						expect(true).to.equal(true);
					} )
				}, 3000);
				// call function
				slidePic();


            });
        });
    });*/
	

	/*describe('some meaningful topic', function () {
	            it('some specific thing that it should do (maybe in reaction something)', function () {
	            	expect(YOUTRYTHETHINGANDTHISWHATITACTUALLYDID).to.have.property(WHATYOUKNOWITSHOULDDO);
	            });

	            it('should do some specific thing thats asynchronous', function () {
	            	this.timeout(5000);
	            	setTimeout( function () {
		            	expect(YOUTRYTHETHINGANDTHISWHATITACTUALLYDID).to.equal(WHATYOUKNOWITSHOULDDO);
						done()
					} )
				}, 3000);

	            });

	            it('should throw an error when bad things happen', function () {
	            	var badFunctionReference = function () {
	            		myFunction (TERRIBLEARGUMENT);
	            	}
	            	expect(AREFERENCETOAFUNCTIONTHATCONTAINSANOTHERBADFUNCTIONCALL).to.throw(ERROR);
	            });
	        });
	    });
*/


