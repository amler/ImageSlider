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

	      	it("should create an instance of constructor.", function(){
        
				var imageSlider = new Slideshow(myImageArray);
				expect(imageSlider).to.be.an.instanceof(Slideshow);
			});
	      	/*
	      	it("should confirm that each array index has a jpeg, jpg, gif, or png extensions.", function(){
				//not sure how to test for it or how to write it - pulled up regex in search.
				var confirmExt = function () {
					slideshow([rfwerf.jpg, rfref.gif])
				}
				expect()
	      	});
			*/
	    });
    });

	
	describe("Slideshow()", function(){
	    describe('Slideshow constructor should have methods that renders and slides images', function () {

	      	it('should inject the correct number of image tags', function () {
				var imageCount = myImageArray.length;
				var total = $('.slides .pics').length;
				//console.log(total);
        		expect(total).to.equal(imageCount);
        	});

	      	
	      	it('should have method that accepts the image arry as an argument and renders to the target' function (){  
	      		var imageSlider = new Slideshow(myImageArray);
	      		var target = $('.slides');
	      		console.log(imageSlider);
		        expect(imageSlider).itself.to.respondTo('renderImage', 'myImageArray');


				/*function test () {
				  expect(arguments).to.be.arguments;
				}*/
	      	});

        	/*
    		it('should display each image during an interval', function (done) {

            	this.timeout(5000);
	            	setTimeout( function () {
		            	expect($('.slides .pics').to.equal(myImageArray[0]);
						done();
					
		           // need additional work on set timout divided 10000 milliseconds by 3 	
				}, 3333);

            });*/


		});
    });
})();


/*
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
    });
	

	describe('some meaningful topic', function () {
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


