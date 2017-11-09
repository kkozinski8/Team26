$(document).ready(function() {
  function checkClassChange() {
    if ($('#slide1').hasClass('active')) {
      $('#content1').css('display', 'flex');
    } else {
      $('#content1').css('display', 'none');
    }
    if ($('#slide2').hasClass('active')) {
      $('#content2').css('display', 'flex');
    } else {
      $('#content2').css('display', 'none');
    }
    if ($('#slide3').hasClass('active')) {
      $('#content3').css('display', 'flex');
    } else {
      $('#content3').css('display', 'none');
    }
  };
  window.setInterval(checkClassChange, 500);
  $(window).scroll(function() {
    $('.history-section').each(function() {
      var scrollTop = $(window).scrollTop(),
        elementOffset = $(this).offset().top,
        distance = (elementOffset - scrollTop),
        windowHeight = $(window).height(),
        breakPoint = windowHeight * 0.9;

      if (distance > breakPoint) {
        $(this).addClass("more-padding");
      }
      if (distance < breakPoint) {
        $(this).removeClass("more-padding");
      }
    });
  });
})
