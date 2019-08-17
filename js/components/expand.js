$(document).ready(function(){

  $('.section-daily .button-expand').on('click', function () {
    if ($('.section-daily .col.display-toggle').hasClass('hidden')) {
      $('.section-daily .col.display-toggle').removeClass('hidden');
      setTimeout(function () {
          $('.section-daily .col.display-toggle').removeClass('visuallyhidden');
      }, 20);
    } else {
      $('.section-daily .col.display-toggle').addClass('visuallyhidden');
      $('.section-daily .col.display-toggle').one('transitionend', function(e) {
          $('.section-daily .col.display-toggle').addClass('hidden');
      });
    };
    $('.section-daily .icon-rotate').toggleClass('rotate')
  });
  
})