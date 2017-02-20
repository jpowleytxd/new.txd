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

$('.products').on('swl', function(event){
  alert('Swipe');
});

  // $('div.rotate-container').on('click', function(event){
  //   console.log('hit');
  //   $('html,body').animate({
  //       scrollTop: $(".products").offset().top},
  //       'slow');
  // });

  // Smooth scrolling to anchor links
  $('div.rotate-container').on('click', function(event) {
  		var target = '#' + $(this).data('scroll');
  		target     = $(target);
  		target = target.length ? target : $('[id=' + this.hash.slice(1) +']');
  			 if (target.length) {
  				 $('html,body').animate({
  						 scrollTop: target.offset().top
  				}, 750);
  				return false;
  		}
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
  	        url         : '/newtxd/functions/processForm.php', // the url where we want to POST
  	        data        : formData, // our data object
  	        dataType    : 'text', // what type of data do we expect back from the server
  	        encode      : true
  		}).done(function(data) {
        if(data == 'success'){
          console.log(data);
    			$errorMessage.html('Thanks for your enquiry!');
          $errorMessage.removeClass('error-message');
          $errorMessage.addClass('success-message');
          $errorMessage.css('display', 'block');
    			// $errorMessage.css('color', 'green');
    			// Trigger the thank you email...
        } else{
          console.log(data);
          $errorMessage.html('Please check your email address and/or name, they may be invalid.');
          $errorMessage.removeClass('success-message');
          $errorMessage.addClass('error-message');
          $errorMessage.css('display', 'block');
      		// $errorMessage.css('color', 'red');
        }
  		});
  	} else {
      console.log(data);
  		$errorMessage.html('Please check your email address and/or name, they may be invalid.');
      $errorMessage.removeClass('success-message');
      $errorMessage.addClass('error-message');
      $errorMessage.css('display', 'block');
  		// $errorMessage.css('color', 'red');
  	}
  });

  var touchStartX;
  var touchStartY;
  var touchEndX;
  var touchEndY;

  $('.prod-info').on('touchstart', function(event){
    touchStartX = event.originalEvent.touches[0].clientX;
    touchStartY = event.originalEvent.touches[0].clientY;
  });

  $('.prod-info').on('touchmove', function(event){
    touchEndX = event.originalEvent.touches[0].clientX;
    touchEndY = event.originalEvent.touches[0].clientY;
  });

  $('.prod-info').on('touchend', function(event){
    var xDif = Math.abs(touchEndX - touchStartX);
    var yDif = Math.abs(touchEndY - touchStartY);

    if(xDif > yDif){//Horizontal Scroll
      if(touchStartX > touchEndX){ //Swipe left
        var currentPos = $(this).data('amount');
        if(currentPos < 3){
          var screenWidth = $('body').css("width");
          screenWidth = parseInt(screenWidth);

          var multiply = currentPos + 1;
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
      } else if(touchStartX < touchEndX){ //Swipe right
        var currentPos = $(this).data('amount');
        if(currentPos > 0){
          var screenWidth = $('body').css("width");
          screenWidth = parseInt(screenWidth);

          var multiply = currentPos - 1;
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
      }
    }
  });

  $.fn.scrollEnd = function(callback, timeout) {
    $(this).scroll(function(){
      var $this = $(this);
      if ($this.data('scrollTimeout')) {
        clearTimeout($this.data('scrollTimeout'));
      }
      $this.data('scrollTimeout', setTimeout(callback,timeout));
    });
  };

  // how to call it (with a 1000ms timeout):
  $(window).scrollEnd(function(){
    var section = $('section');
    $.each(section, function(){
      var self = $(this);
      if(isScrolledIntoView(self,400,true) === true){
        console.clear();
        console.log(self);
        if($(window).width() < 720){
          scrollToEle(self);
        }
      }
    }, 500);
  }, 100);

  function scrollToEle(ele) {
    $('html,body').animate({
        scrollTop: ele.offset().top
   }, 250);
  }

});

// Determine if an element is in the visible viewport
function isScrolledIntoView(elem, margin, halfScreen) {
    var docViewTop    = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop       = $(elem).offset().top;
    var elemBottom    = elemTop + $(elem).height();

    if (halfScreen === true) {
      margin = $(window).height() / 2;
    }
    return ((elemBottom <= docViewBottom + margin) && (elemTop >= docViewTop - margin));
}
