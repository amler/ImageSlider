function Slideshow(a){this.renderImage=function(){a.forEach(function(a){targetDiv.append('<img class = "pics" src='+a+" />")})}}function slidePic(){current+=1,current>=myImageArray.length&&(current=0);var a=-400*current;$(".slides").animate({marginLeft:a},500)}function createSlideshow(){myImageArray.forEach(function(a){$(".slides").append('<img class = "pics" src='+a+" />")}),setInterval(function(){slidePic()},1e3)}var myImageArray=["http://goo.gl/X88VdC","http://goo.gl/vjMK2c","http://goo.gl/B6Yg7e"],targetDiv=$(".slides"),arrayValidator=function(a){if(!$.isArray(a))throw new Error("Not an array!");if(a.length<=0)throw new Error("Empty image array.");var b=new Slideshow(a);b.renderImage()};arrayValidator(myImageArray);var current=0;createSlideshow();