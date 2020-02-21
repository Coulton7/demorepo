(function($) {

  $(document).ready(function() {
    "use strict";
    var colNav = $('.col-nav');
    var nav = $('.navbar'),
      body = $('body'),
      windowScreen = $(window),
      navOffset = nav.offset().top,
      previousScroll = 0;

    if (windowScreen.scrollTop() >= navOffset && !nav.hasClass('sticky')) {
      nav.addClass('sticky');
      colNav.removeClass('col-sm-8 col-sm-offset-2');
      colNav.addClass('col-sm-12');
      $(body).css({
        paddingTop: nav.css('height')
      });
    }
    $(window).on('scroll', function() {

      if (windowScreen.scrollTop() >= navOffset && !nav.hasClass('sticky')) {
        nav.addClass('sticky');
        colNav.removeClass('col-sm-8 col-sm-offset-2');
        colNav.addClass('col-sm-12');
        $(body).css({
          paddingTop: nav.css('height')
        });
      }

      if (windowScreen.scrollTop() < navOffset && nav.hasClass('sticky')) {
        nav.removeClass('sticky');
        colNav.addClass('col-sm-8 col-sm-offset-2');
        colNav.removeClass('col-sm-12');
        $(body).css({
          paddingTop: 0
        });
      }

    });
  });
})(jQuery);
