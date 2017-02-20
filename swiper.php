
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Swiper demo</title>
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">

<link rel="stylesheet" type="text/css" href="css/main.css">
<link rel="stylesheet" type="text/css" href="css/about.css">
<link href="https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800&amp;subset=latin-ext" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Share+Tech+Mono" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="http://new.txd.dev/js/OwlCarousel2-2.2.0/dist/assets/owl.carousel.css" />
<link rel="stylesheet" href="http://idangero.us/swiper/dist/css/swiper.min.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="http://new.txd.dev/js/OwlCarousel2-2.2.0/dist/owl.carousel.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
<script src="js/functions.js"></script>
<script src="js/menu.js"></script>
<script src="js/footer.js"></script>

</head>
<body>
<section class="why-txd">
  <div class="why-title">
    WHY TXD?
  </div>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="why-group why-group-1">
          <div class="why-image why-img-1"><img src="media/img/bulb.png" id="bulb"><img src="media/img/glow.png" id="glow"></div>
          <div class="why-text">
            <h4>Operational Simplicity</h4>
            <p>We deliver complex customer engagement, but keep it simple for the team on site</p>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="why-group why-group-2">
          <div class="why-image why-img-2"><img src="media/img/epos.png" id="epos"></div>
          <div class="why-text">
            <h4>EPoS Integrated</h4>
            <p>Our products talk to your tills in real time, so you maintain control.</p>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="why-group why-group-3">
          <div class="why-image why-img-3"><img src="media/img/bulb.png" id="bulb"></div>
          <div class="why-text">
            <h4>Experience to Deliver</h4>
            <p>We eat, sleep... eat, breathe... and eat hospitality brands, technology and marketing.</p>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="why-group why-group-4">
          <div class="why-image why-img-4"><img src="media/img/tailored.png" id="tailored"></div>
          <div class="why-text">
            <h4>Done Your Way</h4>
            <p>One size does not fit all. We’ll help you find the right solution, tailored to your business.</p>
          </div>
        </div>
      </div>
    </div>

    <style>
    .swiper-button-next, .swiper-button-prev{
      background: none;
    }
    </style>

    <div class="swiper-button-next why-button-container">&rsaquo;</div>
    <div class="swiper-button-prev why-button-container">&lsaquo;</div>
  </div>
</section>

<script src="http://idangero.us/swiper/dist/js/swiper.min.js"></script>

<script>
    var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });
    </script>
</body>
</html>
