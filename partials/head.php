<?php

$page = $_SERVER['REQUEST_URI'];
$page = preg_replace('/.*\/(.*).php/', '$1', $page);
if($page === '/'){
  $page = 'home';
}
$page = $page . '-page';
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1.0 user-scalable=no">
  <meta name="theme-color" content="#444866">
  <meta charset="UTF-8">

  <title>TXD | Digital Marketing Technology</title>

  <link rel="stylesheet" type="text/css" href="css/main.css">
  <link rel="stylesheet" type="text/css" href="css/about.css">
  <link href="https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800&amp;subset=latin-ext" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Share+Tech+Mono" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet">
  <link rel="stylesheet" href="http://idangero.us/swiper/dist/css/swiper.min.css">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
  <script src="js/functions.js"></script>
  <script src="js/menu.js"></script>
  <script src="js/footer.js"></script>
</head>

<body id="<?php print_r($page);?>">
