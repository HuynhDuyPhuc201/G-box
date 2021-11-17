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
    autoPlay: true,
    pageDots: false,
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

// fullscreen project-detail
  $(".detail .fullscreen").on("click", function () {
    $(".popupImg").addClass("active-popupImg");
  });
  $(".popupImg .close").on("click", function () {
    $(".popupImg").removeClass("active-popupImg");
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

    //photo
    var initPhotoSwipeFromDOM = function(gallerySelector) {
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for(var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            if(figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute('data-size').split('x');
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };
            if(figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML; 
            }
            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if(!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }
            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if(index >= 0) {
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};
        if(hash.length < 5) {
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }
        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function(index) {
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            },
            showAnimationDuration : 0,
            hideAnimationDuration : 0
        };
        if(fromURL) {
            if(options.galleryPIDs) {
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        if( isNaN(options.index) ) {
            return;
        }
        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    var galleryElements = document.querySelectorAll( gallerySelector );
    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
    };

    initPhotoSwipeFromDOM('.carousel-img');
});
