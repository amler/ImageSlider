var myImageArray = [
	"http://goo.gl/X88VdC",
	"http://goo.gl/vjMK2c",
	"http://goo.gl/B6Yg7e"
];



function createSlideshow () {
	
	myImageArray.forEach(function (photo) {
	    $('.slides').append('<img class = "pics" src=' + photo  + ' //>')
	});
	
	setTimeout(function() {
		$('.slides').animate({marginLeft: '-=400px'}, 500);
	}, 3000);
	


}
createSlideshow();


/*
(function(){
    function fade() {
        $('.fadein :first-child').fadeOut(2500).next('img').fadeIn(2500).end().appendTo('.fadein');
    }
    setTimeout(function() {
        fade();
        setInterval(fade, 3000);
    }, 9000);
});

$('.active').removeClass('active').addClass('oldActive');    
                   if ( $('.oldActive').is(':last-child')) {
        $('.sp').first().addClass('active');
        }
        else{
        $('.oldActive').next().addClass('active');
        }
    $('.oldActive').removeClass('oldActive');
    $('.sp').fadeOut();
    $('.active').fadeIn();


    });

       $('#button-previous').click(function(){
    $('.active').removeClass('active').addClass('oldActive');    
           if ( $('.oldActive').is(':first-child')) {
        $('.sp').last().addClass('active');
        }
           else{
    $('.oldActive').prev().addClass('active');
           }
    $('.oldActive').removeClass('oldActive');
    $('.sp').fadeOut();
    $('.active').fadeIn();
    });
*/

/*
        var active = $('.container'); 
        var next = ($('.container').next().length > 0) ? $('.active').next() : $('.container img:first');

        active.removeClass('active');
        next.addClass('active');
    }*/

