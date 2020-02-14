function navBtn(x) {
  x.classList.toggle("change");
  var x = document.getElementById('myNav');
    if (x.style.height === "100%") {
        x.style.height = "0%";
        $('.main').removeClass('active');
      } else {
          x.style.height = "100%";
          $('.main').addClass('active');
      }
  }
