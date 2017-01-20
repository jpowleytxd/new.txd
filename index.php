<!DOCTYPE html>
<html lang="en">

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1.0 user-scalable=no">
  <meta charset="UTF-8">

  <title>TXD | Digital Marketing Technology</title>

  <link rel="stylesheet" type="text/css" href="css/main.css">
  <link href="https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800&amp;subset=latin-ext" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Share+Tech+Mono" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
  <script src="js/functions.js"></script>
</head>

<body>
  <header>
    <div class="header-logo"><img src="media/img/logo_small.svg"></div>
    <div class="header-menu-button">
      Menu
      <div class="hamburger-outer">
        <div class="hamburger-line top-line"></div>
        <div class="hamburger-line middle-line"></div>
        <div class="hamburger-line bottom-line"></div>
      </div>
    </div>
    <div class="header-phone-number">
      <a href="tel:+441785257777">01785 255 77 77</a>
    </div>
    <?php include('partials/menu.php');?>
  </header>

  <section class="home-container">
    <div class="back-tx"></div>
    <div class="front-xd"></div>
    <div class="hero-container">
      <div class="hero-text">
        <h1>TXD enables brand marketing teams to unlock the power of technology.<h1>
      </div>
      <div class="rotate-container">
        <div class="scroll-down-container">
          <span class="char1">S</span>
          <span class="char2">C</span>
          <span class="char3">R</span>
          <span class="char4">O</span>
          <span class="char5">L</span>
          <span class="char6">L</span>
          <span class="char7"> </span>
          <span class="char8">D</span>
          <span class="char9">O</span>
          <span class="char10">W</span>
          <span class="char11">N</span>
        </div>
        <div class="rotate-border">
          <div class="rotate-arrow fa fa-long-arrow-down"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="products">
    <div class="prod-nav-container">
      <div class="prod-nav-items">
        <div class="prod-nav-item prod-mobile prod-selected" id="prod-mobile" data-amount="0" data-product="mobile">
          <div class="prod-icon"><i class="fa fa-mobile-phone"></i></div>
          <span class="prod-nav-label">Mobile</span>
        </div>
        <div class="prod-nav-item prod-campaigns" id="prod-campaigns" data-amount="1" data-product="campaigns">
          <div class="prod-icon"><i class="fa fa-envelope-o"></i></div>
          <span class="prod-nav-label">Campaigns</span>
        </div>
        <div class="prod-nav-item prod-loyalty" id="prod-loyalty" data-amount="2" data-product="loyalty">
          <div class="prod-icon"><i class="fa fa-heart-o"></i></div>
          <span class="prod-nav-label">Loyalty</span>
        </div>
        <div class="prod-nav-item prod-scv" id="prod-scv" data-amount="3" data-product="scv">
          <div class="prod-icon"><i class="fa fa-user-o"></i></div>
          <span class="prod-nav-label">SCV</span>
        </div>
      </div>
      <div class="prod-nav-bar">
        <div class="prod-nav-current"></div>
      </div>
    </div>
    <div class="prod-info-container">
      <div class="prod-shift-div">
        <div class="prod-info" id="mobile-info">
          <h3>Mobile Applications</h3>
          <a href="" id="mobile-prod-link">
            <div class="prod-link-outer mobile-prod-link">Find Out More</div>
          </a>
          <p>For hospitality brands, mobile apps can have a game-changing impact on customer engagement and revenue generation.
            Ourapps are EPoS-integrated, white-label and delivered via a SaaS framework.<br/><br/>
            This means that your investment in mobile is future-proofed, and your app will grow with your business over time.
            Plug in ordering, payment, booking, loyalty, vouchers and pre-payment whenever you need them.</p>
        </div>
        <div class="prod-info" id="campaigns-info">
          <h3>Marketing Campaigns</h3>
          <a href="" id="campaigns-prod-link">
            <div class="prod-link-outer campaigns-prod-link">Find Out More</div>
          </a>
          <p>CampaignsPlus is our online campaign management tool, the control-centre for your campaigns via email,
            SMS or push notifications in your apps. It's always on, sending tailored,
            relevant communications and incentives to your customers in real time.<br/><br/>
            The window onto your SCV, it's delivered with a set of bespoke templates that work with your customer segmentation,
            so as your database grows and changes, so does your messaging.</p>
        </div>
        <div class="prod-info" id="loyalty-info">
          <h3>Loyalty</h3>
          <a href="" id="loyalty-prod-link">
            <div class="prod-link-outer loyalty-prod-link">Find Out More</div>
          </a>
          <p>Whether you run a formal loyalty scheme, or want to surprise and delight loyal customers with ad hoc rewards,
            our solution is designed to drive footfall and spend in your business.
            EPoS integration means that every visit, reward or redemption is logged,
            and guarantees seamless operational control.<br/><br/>
            Targeted communications can also be setup by integrating Loyalty with CampaignsPlus,
            allowing you to create an automated set of responses via email, SMS or app.</p>
        </div>
        <div class="prod-info" id="scv-info">
          <h3>SCV</h3>
          <a href="" id="scv-prod-link">
            <div class="prod-link-outer scv-prod-link">Find Out More</div>
          </a>
          <p>A “Single Customer View” database will allow you to aggregate your customer data and transactional information in one place,
            streamlining feeds from EPoS, bookings, loyalty, app sign-ups, WiFi and promotions.<br/><br/>
            With a clear understanding of customers' interactions with your brand,
            you'll be ready to build a truly customer-centric business,
            putting the consumer at the heart of everything you do.</p>
        </div>
      </div>
    </div>
    <div class="prod-images-container">
      <div class="prod-image-shift-div">
        <div class="prod-image-group mobile-images">
          <div class="prod-image scv-image"></div>
          <div class="prod-image loyalty-image"></div>
          <div class="prod-image campaigns-image"></div>
          <div class="prod-image mobile-image"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="why-txd">
   <div class="why-title">
     WHY TXD?
   </div>
   <div class="why-container">
     <div class="why-button-container" id="why-back-button" data-direction="backward">&lsaquo;</div>
     <div class="why-selection-container">
       <div class="why-shift-div">
         <div class="why-group why-group-1">
           <div class="why-image why-img-1"></div>
           <div class="why-text">
             <h4>Operational Simplicity</h4>
             <p>We deliver complex customer engagement, but keep it simple for the team on site</p>
           </div>
         </div>
         <div class="why-group why-group-2">
           <div class="why-image why-img-2"></div>
           <div class="why-text">
             <h4>EPoS Integrated</h4>
             <p>Our products talk to your tills in real time, so you maintain control.</p>
           </div>
         </div>
         <div class="why-group why-group-3">
           <div class="why-image why-img-3"></div>
           <div class="why-text">
             <h4>Experience to Deliver</h4>
             <p>We eat, sleep... eat, breathe... and eat hospitality brands, technology and marketing.</p>
           </div>
         </div>
         <div class="why-group why-group-1">
           <div class="why-image why-img-1"></div>
           <div class="why-text">
             <h4>Done Your Way</h4>
             <p>One size does not fit all. We’ll help you find the right solution, tailored to your business.</p>
           </div>
         </div>
       </div>
     </div>
     <div class="why-button-container" id="why-forward-button" data-direction="forward">&rsaquo;</div>
   </div>
  </section>

  <footer>

  </footer>
</body>

</html>
