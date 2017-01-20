$(document).ready(function(){

  var scrollDownContainer = $('.scroll-down-container');
  var rotateArrow = $('.rotate-arrow');
  TweenMax.to(scrollDownContainer, 10, {
    ease: Power0.easeNone,
    rotation: 360,
    repeat: -1
  });

  var tl = new TimelineMax();
  TweenMax.set(rotateArrow,  {
    y: -5
  })
  tl.to(rotateArrow,1,{
    y: 5,
    color: 'rgba(255, 255, 255, 0.5)'
  });
  tl.to(rotateArrow,1,{
    y: -5,
    color: 'rgba(255, 255, 255, 1)',
    onComplete: function() {
      tl.seek(0);
      tl.play();
    }
  });


  $('div.prod-nav-item').on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();

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

    // $('.prod-shift-div').css({
    //   'top' : '-' + infoTop + 'vh'
    // });

    var prodImageShiftDiv = $('.prod-image-shift-div');
    imageLeft = imageLeft + '%';
    TweenLite.to(prodImageShiftDiv, 1, {
      ease: Power3.easeOut,
      left: imageLeft
    });
  });

  $('div.rotate-container').on('click', function(event){
    console.log('hit');
    $('html,body').animate({
        scrollTop: $(".products").offset().top},
        'slow');
  });

});
