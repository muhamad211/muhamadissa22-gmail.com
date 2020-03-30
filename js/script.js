$(function() {
  "use strict";

  $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
      $(".sticky-top")
        .addClass("top-nav-collapse")
        .addClass("top-nav-collapse nav-link")
        .css("padding", "10");
    } else {
      $(".sticky-top")
        .removeClass("top-nav-collapse")
        .css("padding", "20");
    }
  });

  var winH = $(window).height(),
    navH = $(".navbar").innerHeight();
  $(".carousel,.carousel-item").height(winH - navH + 100);

  $(".navbar a").click(function(e) {
    //هااااااااااااااااااااممممممم smooth scroll
    if (this.hash !== "") {
      e.preventDefault();

      const hash = this.hash;
      $("html,body").animate(
        {
          scrollTop: $(hash).offset().top - 100 /*-100 من عندي */
        },
        800
      );
    }
  });
});
