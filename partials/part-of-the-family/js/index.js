var zonalFamilyButton 		 = $('.zonal-family-button'),
	  zonalFamilyPanel  		 = $('.zonal-family-panel'),
    zonalFamilyPanelInner  = $('.zonal-family-panel .inner'),
		zonalPanelIsOpen  		 = false,
		zonalLogo 						 = $('.zonal-logo'),
		zonalCopy 						 = $('.zonal-family-panel .inner .copy'),
		zonalAnimation 				 = new TimelineMax();

zonalAnimation.paused(true);

zonalAnimation.to(zonalFamilyPanel, 0.4, {
	height: 600,
	ease: Power3.easeOut
})

zonalAnimation.to(zonalFamilyPanelInner, 0.6, {
	bottom: 72,
	ease: Power3.easeOut,
	delay: -0.2
})

zonalAnimation.to(zonalLogo, 0.3, {
	y: 0
})

zonalAnimation.to(zonalCopy, 0.3, {
	opacity: 1
})

zonalFamilyButton.on('click', function(){
	if (zonalPanelIsOpen === false) {
		zonalAnimation.play();
		zonalPanelIsOpen  = true;
		$(this).toggleClass('active');
		zonalFamilyPanel.toggleClass('active');
	} else {
		zonalAnimation.reverse();
		zonalPanelIsOpen  = false;
		$(this).toggleClass('active');
		zonalFamilyPanel.toggleClass('active');
	}
});