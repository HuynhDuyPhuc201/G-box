// $(window).on('load', function () {
//     $('.loading').slideUp(800);
// });
$(document).ready(function () {
  $(".loading").fadeOut(2000);

  let header = document.querySelector("header");
  let menuPc = document.querySelector(".menu");
  // BacktoTop
  $(this).on("scroll", function () {
    let scrollTop = document.documentElement.scrollTop;
    // console.log(scrollTop);

    $(".backtoTop_img").on("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    // menuFix
    if (scrollTop > header.offsetHeight + menuPc.offsetHeight) {
      $(".menuFixed").slideDown(300);
    } else {
      $(".menuFixed").slideUp(200);
    }
  });

  // slider gallery
  let $carousel = $(".gallery .gallery__wrap");
  $carousel.flickity({
    cellAlign: "left",
    prevNextButtons: false,
    contain: true,
    wrapAround: true,
    pageDots: false,
  });

  // prev
  $(".gallery .gallery__arrow .btn-prev").on("click", function () {
    $carousel.flickity("previous");
  });
  $(".gallery .gallery__arrow .btn-next").on("click", function () {
    $carousel.flickity("next");
  });

  // slider studio detail
  let $carousel2 = $(".studioDetail .studioDetail__slide");
  $carousel2.flickity({
    cellAlign: "left",
    prevNextButtons: false,
    contain: true,
    wrapAround: true,
    fullscreen: true,
    autoPlay: true,
    on: {
      change: function (index) {
        let number = $(".studioDetail__detail .number .number_d");
        // let floorplan = $('.studioDetail__detail .floorplan');
        let indexPage = index + 1;
        number.text(indexPage.toString().padStart(2, 0));

        // let img = $('.studioDetail__slide-item img');
        // let get_id = img.attr('data-id');
        // // $(this).attr('href', 'img/StudioDetail/' + get_id)
        // console.log(get_id);
      },
    },
  });

  // prev
  $(".studioDetail__detail .arrow .btn-prev").on("click", function () {
    $carousel2.flickity("previous");
  });
  $(".studioDetail__detail .arrow .btn-next").on("click", function () {
    $carousel2.flickity("next");
  });

  // hamburger
  let btn = $("header .container .hamburger");
  btn.on("click", function () {
    $(".menuMobile").toggleClass("active");
  });

  // hambuger
  const menuBtn = $(".hamburger");
  menuBtn.on("click", () => {
    menuBtn.toggleClass("open");
  });

  // all more
  var more = $(".allwork .allwork__more a");
  more.on("click", function (e) {
    e.preventDefault();
    more.css("display", "none");
    $(".imgMore").addClass("active");
  });


  // hover menu mb
  let li_hover = $(".menuMobile ul li");
  li_hover.hover(function () {
    li_hover.addClass("li_active");
    $(this).removeClass("li_active");
  });

  
  // tab project in home
  let tab = $(".project .project__tab ul li");
  let project = $(".project .project__wrap");
  tab.on("click", function (e) {
    e.preventDefault();
    tab.removeClass("active");
    $(this).addClass("active");

    let index = $(this).index();
    // console.log(index);
    project.removeClass("active");
    $(project[index]).addClass("active");
  });

  AOS.init({
    duration: 1200,
  });

  // contact
  $("footer .right .submit button").on("click", function (e) {
    e.preventDefault();

    let name = $("footer .name input").val();
    let phone = $("footer .phone input").val();
    let email = $("footer .mail input").val();
    let subject = $("footer .subject input").val();

    // var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

    var check_name = true;
    var check_phone = true;
    var check_email = true;
    var check_subject = true;

    if (name == "") {
      $("footer .name input").addClass("error");
      check_name = false;
    } else {
      $("footer .name input").removeClass("error");
      check_name = true;
    }
    if (phone == "") {
      $("footer .phone input").addClass("error");
      check_phone = false;
    } else {
      $("footer .phone input").removeClass("error");
      check_phone = true;
    }
    if (email == "") {
      $("footer .mail input").addClass("error");
      check_email = false;
    } else {
      $("footer .mail input").removeClass("error");
      check_email = true;
    }
    if (subject == "") {
      $("footer .subject input").addClass("error");
      check_subject = false;
    } else {
      $("footer .subject input").removeClass("error");
      check_subject = true;
    }

    if (
      check_name == true &&
      check_phone == true &&
      check_email == true &&
      check_subject == true
    ) {
      $(".popup").addClass("activePopup");
      $(".popup .text").html("Logged in successfully !!!");
    } else {
      $(".popup").addClass("activePopup");
      $(".popup .text").html("System error");
    }

    $(".popup .popup-modal .btn").on("click", function () {
      $(".popup").removeClass("activePopup");
    });
  });
});
