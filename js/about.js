$(document).ready(function(){
  // Setting variables for the teams page
  var agency  = $('.agency'),
  		product = $('.product'),
  		sWidth  = $(window).width(),
  		splitL  = '70%',
  		splitS  = '30%',
      inner   = $('.about-us .inner'),
  		speed   = 0.5,
  		arrows  = $('.arrow-keys');

  // Sort out responsiveness
  function fixSizes() {
  	if (sWidth < 1000 && sWidth > 640) {
  		splitL  = '50%';
  		splitS  = '50%';
  		speed   = 0.1;
  		inner.css({
  			'width' : '50%'
  		})
  	} else if (sWidth <= 640) {
  		splitL  = '100%';
  		splitS  = '0%';
  		speed   = 0.5;
  		inner.css({
  			'width' : '100%'
  		})
  	} else {
  		splitL  = '70%';
  		splitS  = '30%';
  		speed   = 0.5;
  		inner.css({
  			'width' : '30%'
  		})
  	}
  }

  $(window).resize(function(){
  	sWidth  = $(window).width();
  	fixSizes();
  })
  fixSizes();

  // Handle clicking on the team
  agency.on('click', function(){
  	openSection('.agency','.product');
  });
  product.on('click', function(){
  	openSection('.product','.agency');
  });

  // Open the team section
  function openSection(section, other) {
  	TweenMax.to(arrows, 0.3, {
  		opacity: 0
  	})
  	var $section      = $(section);
  	var $inner        = $(section + ' .inner');
  	var $other        = $(other);
  	var $otherInner   = $(other + ' .inner');
  	TweenMax.to($section, speed, {
  		width: splitL,
  		ease: Power3.easeIn,
  		onComplete: function() {
  			TweenMax.to($inner, speed, {
  				opacity: 1
  			})
  		}
  	})
  	TweenMax.to($other, speed, {
  		width: splitS,
  		ease: Power3.easeIn
  	})
  	TweenMax.to($otherInner, 0.2, {
  		opacity: 0
  	})
  	$inner.css({
  		'pointer-events' : 'initial'
  	});
  	$otherInner.css({
  		'pointer-events' : 'none'
  	});
  }

  // Reset the team section
  function clearSections() {
  	var agency  = $('.agency');
  	var product = $('.product');
  	TweenMax.to(agency, 0.4, {
  		width: '50%'
  	})
  	TweenMax.to(product, 0.4, {
  		width: '50%'
  	})
  	TweenMax.to(inner, 0.2, {
  		opacity: 0
  	})
  	inner.css({
  		'pointer-events' : 'none'
  	});
  	TweenMax.to(arrows, 0.3, {
  		opacity: 1
  	})
  }

  // Switch team
  $('.switch').on('click', function(event){
  	event.stopPropagation();
  	var section = $(this).parent().parent('div').attr('class');
  	if (section === 'agency') {
  		openSection('.product','.agency');
  	} else {
  		openSection('.agency','.product');
  	}
  });

  // Map keypresses to activate the team sides
  $(document).bind('keydown', function(e) {
  	if ( event.keyCode == 37 ) {
      event.preventDefault();
  		openSection('.agency','.product');
    } else if (event.keyCode == 39) {
      event.preventDefault();
      openSection('.product','.agency');
  	}
  });

  $('.left').on('click', function(event){
    event.preventDefault();
    openSection('.agency','.product');
  });

  $('.right').on('click', function(event){
    event.preventDefault();
    openSection('.product','.agency');
  });

  // If user scrolls away from the teams panel, reset it
  $(window).on('scroll', function(){
  	var ele = $('#prod-agen');
  	var margin = ($(window).height() - 100);
  	if (isScrolledIntoView(ele, margin) === false) {
  		clearSections();
  	}
  });

});
