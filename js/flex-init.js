(function($) {
  $(document).ready(function() {
    $('.flexslider').flexslider({
      controlNav: false,
      directionNav: false,
      animation: "fade",
      before: function() {},
      after: function() {
          var elements = document.getElementsByClassName('flex-active-slide').getElementsByClassName('typewrite');
          for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
          }
      }
    });
  });
})(jQuery);
