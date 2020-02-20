(function($) {
  $(document).ready(function() {
    $('.flexslider').flexslider({
      controlNav: false,
      directionNav: false,
      animation: "fade",
      before: function() {},
      after: function(slider) {
        if($(slider).find(".flex-active-slide")) {
          var elements = document.getElementsByClassName('typewrite');
          for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
          }
        }
        else{
          $(slider).find(".flex-header").removeClass("typewrite");
        }
      }
    });
  });
})(jQuery);
