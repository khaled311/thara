$(function() {
  // Toggle open
  $(".drop").on("click", function(e) {
    $(this)
      .find(".subMenu")
      .slideToggle();
    $(this)
      .siblings()
      .find(".subMenu")
      .slideUp();
    $(this)
      .find(".ar")
      .toggleClass("open");
    $(this)
      .siblings()
      .find(".ar")
      .removeClass("open");
    e.stopPropagation();
  });

  // Toggle open
  $(".subMenu > li").on("click", function() {
    $(this)
      .find(".arr-left")
      .toggleClass("open");
  });

  // Toggle open
  $(".sideNav li").on("click", function() {
    $(this)
      .find(".dropDown")
      .slideToggle();
    $(this)
      .siblings()
      .find(".dropDown")
      .slideUp();
    $(this)
      .siblings()
      .find(".arr-left")
      .removeClass("open");
  });

  // open Side Nav
  $(".menuTriger").on("click", function() {
    $(".sideNav").toggleClass("open");
    $(".navover").toggleClass("open");
    $("html").css("overflow", "hidden");
  });

  // Close Side Nav
  $(".navover, .close1").on("click", function() {
    if ($(".sideNav").hasClass("open")) {
      $(".bars").removeClass("active");
      $(".navover").removeClass("open");
      $(".sideNav").toggleClass("open");
      $("html").css("overflow", "auto");
    }
  });

  // Search Open
  $("header span.lnr.lnr-magnifier").click(function() {
    $(".searchh").toggleClass("open");
    $("html").css("overflow", "hidden")
  });

  // Search Close
  $(".searchh, .searchh form > span.lnr").click(function() {
    $(".searchh").toggleClass("open");
    $("html").css("overflow", "auto")
  });

  $(".searchh form").on("click", function(e) {
    e.stopPropagation();
  });

  // Sticky Navbar
  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= $("nav").innerHeight()) {
      $("nav").addClass("scroll");
    } else {
      $("nav").removeClass("scroll");
    }
  });

  // Document Animation
  // $("header .bottom").on("click", function() {
  //   $("html, body").animate(
  //     {
  //       scrollTop: $(".main").offset().top - $("nav").innerHeight()
  //     },
  //     1000
  //   );
  // });

  // Clients Slider
  $(".clients .owl-carousel").owlCarousel({
    autoplay: false,
    rtl: true,
    loop: true,
    items: 6,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true
      },
      600: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4,
        nav: true,
        dots: false
      },
      1200: {
        items: 6
      }
    },
    navText: ["<span></span>", "<span></span>"]
  });

  if ($(window).width() < 992) {
    $(".projects .projectss").addClass("owl-carousel");
  } else {
    $(".projects .projectss").removeClass("owl-carousel");
  }

  $(".projects .owl-carousel").owlCarousel({
    rtl: true,
    autoplay: false,
    loop: true,
    margin: 5,
    nav: false,
    dots: true,
    items: 1,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      767: {
        items: 3
      }
    }
  });
});

try {
  // Parallax Effect
  $(window).on("scroll", function() {
    var ypos = window.pageYOffset,
      img = document.querySelector("header > img");
    if (img) {
      img.style.top = ypos * 1 + "px";
    }
  });
} catch (error) {}

var a = 0;
$(window).on("scroll", function() {
  if (a === 0 && $(this).scrollTop() >= ($(".info-section").offset().top) / 2) {
    $(".timer").countTo();
    a = 1;
  }
});

//footer accordion
if ($(window).width() < 992) {
  $(".foot-links button").attr("data-toggle", "collapse");
}

$(".foot-links button").on("click", function() {
  $(this).toggleClass("trans");
  $(this)
    .parent()
    .parent()
    .siblings()
    .find(".collapse")
    .collapse("hide");
  $(this)
    .parent()
    .parent()
    .siblings()
    .find("button")
    .removeClass("trans");
});

// Preloder
$(window).on("load", function() {
  $("html").css("overflow-y", "auto");
  $(".preloader").fadeOut(400, function() {
    $(this).remove()
  });
});
