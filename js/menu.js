$(document).ready(function(){

  var menuIsOpen   = false,
      burger       = $('.menu .burger'),
      overlay      = $('.overlay'),
      menuInner    = $('.menu .inner'),
      menuContent  = $('.menu .inner .menu-content'),
  		messageUs    = $('.message-us'),
  		contactForm  = $('.contact-form'),
  		cancelForm   = $('.cancel-form'),
      headerLogo   = $('.header-logo'),
      headerPhoneNumber = $('.header-phone-number');
  var height       = menuContent.height();

  function closeMenu() {
  	// Close the menu
  		TweenMax.to(overlay, 0.4, {
  			display: 'none',
  			opacity: 0,
  			delay: 0.2
  		});
  		TweenMax.to(menuContent, 0.2, {
  			opacity: 0,
  			onComplete: function() {
  				TweenMax.to(menuInner, 0.4, {
  					width: 0,
  					padding: 0,
            onComplete: function() {
              menuInner.removeClass('active');
            }
  				});
  			}
  		});
  		TweenMax.to(contactForm, 0.4, {
  			width: 0
  		});

      TweenMax.to(headerLogo, 0.2, {
        'z-index': '101',
        filter: ''
      });

      TweenMax.to(headerPhoneNumber, 0.2, {
        color: '#fff'
      });

  		burger.toggleClass('closed');
  		burger.toggleClass('open');
  		contactForm.removeClass('active');
  		burger.removeClass('white');
  		menuIsOpen = false;
  }

  overlay.on('click', function(event) {
  	closeMenu();
  });

  burger.on('click', function(event) {

    if(burger.hasClass('disabled') == false){
    	burger.toggleClass('disabled');
    	setTimeout(function(){
    			burger.toggleClass('disabled');
    	}, 400);

    	event.stopPropagation;
    	if (menuIsOpen === false) {
    		// Open the menu
    		TweenMax.set(overlay, {
    			display: 'block',
    			opacity: 1
    		});
    		TweenMax.to(menuInner, 0.3, {
    			width: '50%',
    			padding: 0,
    			onComplete: function() {
    				TweenMax.to(menuContent, 0.2, {
    					opacity: 1
    				});
    			}
    		});
        menuInner.addClass('active');
    		burger.toggleClass('closed');
    		burger.toggleClass('open');
    		menuIsOpen = true;

        TweenMax.to(headerLogo, 0.2, {
          'z-index': '1000',
          filter: 'invert(100%)'
        });

        TweenMax.to(headerPhoneNumber, 0.2, {
          'color': '#00c389'
        });
    	} else {
    		closeMenu();
    	}
    }
  });

  function openContactForm() {
    contactForm.toggleClass('active');
  	burger.addClass('white');
    TweenMax.to(menuInner, 0.3, {
  		width: '100%',
  		padding: 0,
  		onComplete: function() {
  			TweenMax.to(menuContent, 0.2, {
  				opacity: 1
  			});
  		}
  	});
  	TweenMax.to(contactForm, 0.3, {
  		width: '80%'
  	});
    TweenMax.to(headerPhoneNumber, 0.2, {
      color: 'rgb(255, 255, 255)'
    });
  }

  messageUs.on('click', function(event) {

  	openContactForm();
  });

  cancelForm.on('click', function(event) {
  	burger.removeClass('white');
  	TweenMax.to(contactForm, 0.3, {
  		width: 0
  	});
  	TweenMax.to(menuInner, 0.3, {
  			width: '50%'
  		});
      TweenMax.to(headerPhoneNumber, 0.2, {
        color: '#00c389'
      });
  	$('#enquiry_form').reset();
  });

  $('.prod-link-outer').on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    openContactForm();
  })

});
