'use strict';

//slick carousel
$(document).ready(function() {
  $('#slideshow .slick').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
  });
});

//img btn seta mob
$(document).ready(function() {
  $(".btn-seta-gin-mob").click(function() {
    $(".img-seta-gin-mob").toggle();
  });
  $(".btn-seta-orange-mob").click(function() {
    $(".img-seta-orange-mob").toggle();
  });
  $(".btn-seta-skol-mob").click(function() {
    $(".img-seta-skol-mob").toggle();
  });
});