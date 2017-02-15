$(document).ready(function(){

  var scrollDownContainer = $('.scroll-down-container');
  var rotateArrow = $('.rotate-arrow');
  TweenMax.to(scrollDownContainer, 5, {
    ease: Power0.easeNone,
    rotation: 360,
    repeat: -1
  });

  var tl = new TimelineMax();
  TweenMax.set(rotateArrow,  {
    y: -5
  });
  tl.to(rotateArrow,0.5,{
    y: 5,
    opacity: 0.5
  });
  tl.to(rotateArrow,0.5,{
    y: -5,
    opacity: 1,
    onComplete: function() {
      tl.seek(0);
      tl.play();
    }
  });

  var glow = $('#glow');
  var bulb = $('#bulb');
  var t2 = new TimelineMax();
  TweenMax.set(glow, {
    opacity: 1,
    filter: 'brightness(110%) sepia(10%)'
  });
  t2.to(glow,1,{
    opacity: 0.9,
    filter: 'brightness(100%) sepia(20%)'
  });
  t2.to(glow,1,{
    opacity: 0.9,
    filter: 'brightness(110%) sepia(10%)',
    onComplete: function() {
      t2.seek(0);
      t2.play();
    }
  });


  $('div.prod-nav-item').on('click', function(event) {
  event.preventDefault();
  event.stopPropagation();

  var screenWidth = $('body').css("width");
  screenWidth = parseInt(screenWidth);

  if(screenWidth >= 601){
    var multiply = $(this).data("amount");
    var menuTop = multiply * 150;
    var infoTop = multiply * 80;
    var imageLeft = multiply * 100;

    var prodNavCurrent = $('.prod-nav-current');
    menuTop = 'calc(((80vh - 600px) / 2) + ' + menuTop + 'px)';
    TweenLite.to(prodNavCurrent, 1, {
      ease: Power3.easeOut,
      top: menuTop
    })

    $('.prod-selected').toggleClass('prod-selected');
    $(this).toggleClass('prod-selected');

    var prodShiftDiv = $('.prod-shift-div');
    infoTop = '-' + infoTop + 'vh';
    TweenLite.to(prodShiftDiv, 1, {
      ease: Power3.easeOut,
      top: infoTop
    });

    var prodImageShiftDiv = $('.prod-image-shift-div');
    imageLeft = imageLeft + '%';
    TweenLite.to(prodImageShiftDiv, 1, {
      ease: Power3.easeOut,
      left: imageLeft
    });
  } else{
    var multiply = $(this).data("amount");
    var menuLeft = multiply * 25;
    var infoLeft = multiply * 100;

    var prodNavCurrent = $('.prod-nav-current');
    menuLeft = menuLeft + '%';
    TweenLite.to(prodNavCurrent, 1, {
      ease: Power3.easeOut,
      marginLeft: menuLeft
    })

    $('.prod-selected').toggleClass('prod-selected');
    $(this).toggleClass('prod-selected');

    var prodShiftDiv = $('.prod-shift-div');
    infoLeft = '-' + infoLeft + '%';
    TweenLite.to(prodShiftDiv, 1, {
      ease: Power3.easeOut,
      left: infoLeft
    });
  }
});

  // $('div.rotate-container').on('click', function(event){
  //   console.log('hit');
  //   $('html,body').animate({
  //       scrollTop: $(".products").offset().top},
  //       'slow');
  // });


  $('.carousel').owlCarousel({
  	items:1,
  	nav: false,
  	dots: false,
  	loop: true
  });

  var owl = $('.carousel').owlCarousel();
  $("#why-forward-button").on('click', function () {
      owl.trigger('next.owl.carousel');
  });
  $("#why-back-button").on('click', function () {
      owl.trigger('prev.owl.carousel');
  });

  $('.send-message').on('click', function(event) {
  	event.preventDefault();
  	event.stopPropagation();
  	// alert('cliked');
  	var formData = {
  		'title' 	: 	$('#title').val(),
  	 	'name' 		: 	$('#name').val(),
  	 	'email' 	: 	$('#email').val(),
  	 	'safety' 	: 	$('#safety').val(),
  	 	'enquiry' 	: 	$('#enquiry').val()
  	}
  	var $errorMessage = $('.error-message');
  	function validEmail(email) {
  		const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)/g;
  		var res   = regex.test(email)
  		if (res === true) {
  			return true;
  		} else {
  			return '';
  		}
  	}
  	if ((validEmail(formData['email']) === true) && (formData['safety'] === '') && (formData['name'] !== '') && (formData['name'] !== null)) {
  		console.log('Valid email address');
  		$.ajax({
  			type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
  	        url         : 'functions/processForm.php', // the url where we want to POST
  	        data        : formData, // our data object
  	        dataType    : 'text', // what type of data do we expect back from the server
  	        encode      : true
  		}).done(function(data) {
  			$errorMessage.html('Thanks for your enquiry!');
  			$errorMessage.css('color', 'green');
  			// Trigger the thank you email...
  				console.log(data);
  		});
  	} else {
  		$errorMessage.html('Please check your email address and/or name, they may be invalid.');
  		$errorMessage.css('color', 'red');
  	}
  });

});
