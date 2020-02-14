function navBtn(x) {
  x.classList.toggle("change");
  var x = document.getElementById('myNav');
    if (x.style.height === "100%") {
        x.style.height = "0%";
        $('.main').removeClass('active');
        $("body").removeClass('noscroll');
      } else {
          x.style.height = "100%";
          $('.main').addClass('active');
          $("body").addClass('noscroll');
      }
  }
