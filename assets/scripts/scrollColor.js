$(window).on("scroll touchmove", function() {

  if ($(document).scrollTop() >= $("#home").position().top) {

    $('body').css('background', $("#home").attr("data-color"));

  };

  if ($(document).scrollTop() > $("#biotech").position().top) {

    $('body').css('background', $("#biotech").attr("data-color"))

  };

  if ($(document).scrollTop() > $("#break").position().top) {

    $('body').css('background', $("#break").attr("data-color"))

  };

  if ($(document).scrollTop() > $("#manu").position().top) {

    $('body').css('background', $("#manu").attr("data-color"))

  };

  if ($(document).scrollTop() > $("#team").position().top) {

    $('body').css('background', $("#team").attr("data-color"))

  };


});
