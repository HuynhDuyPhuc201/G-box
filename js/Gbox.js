
$(document).ready(function(){
// BacktoTop
    $(this).on('scroll',function(){
        let scrollTop = document.documentElement.scrollTop;
            // console.log(scrollTop);
            $('.backtoTop_img').on('click',function(){
                window.scrollBy({
                    top: -3000,
                    behavior: "smooth",
                    })
            })
    })

    var fullScreen = $('.project01 .container .fullcreen img');
    fullScreen.on('click', function() {
        $(".imgFullscreen").addClass("active3");
    })
    var imgFullscreen = $('.imgFullscreen');
    imgFullscreen.on('click', function() {
        $(".imgFullscreen").removeClass("active3");
    })


    // hamburger
    let btn = document.querySelector('.header .container .hamburger');
    btn.addEventListener('click',function(){
        document.querySelector('.menu-mobile').classList.toggle('active');
        document.querySelector('.menumb_over').classList.toggle('active');
    });
    // hambuger
    const menuBtn = document.querySelector('.hamburger');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
        if(!menuOpen){
            menuBtn.classList.add('open');
            menuOpen = true;
        }
        else{
            menuBtn.classList.remove('open');
            menuOpen = false;
        }
    });
    // all more
    var more = $(".allwork");
    more.on('click', function(e){
        e.preventDefault();
        $(".img-more").toggle('300');
    });

    // Menu fixed 
    $(window).scroll(function(){
        if ($(window).scrollTop() >  300){
            $('.menu-fixed').slideDown(300);
        } 
            else{
            $('.menu-fixed').slideUp(200);
        }
    });


    let $carousel2= $('.studio-detail .slide-st');
    $carousel2.flickity({
    // options
    cellAlign: 'left',
    wrapAround: true,
    contain: true,
    pageDots: false,
    prevNextButtons: false,

    });

    let prev_et = ()=>{
        $('.studio-detail .detail .slide .slide_left').on( 'click', function() {
            $("main .studio-detail .slide-st").flickity('previous');
        });
    }
    prev_et();
    let next_et = ()=>{
        $('.studio-detail .detail .slide .slide_right').on( 'click', function() {
            $("main .studio-detail .slide-st").flickity('next');
        });
    }
    next_et();


    AOS.init({
        duration: 1200,
    });
    //menu mb
    let li_hover = $('.menu-mobile ul li');
    li_hover.hover(function(){
        li_hover.addClass('li_active');
        $(this).removeClass('li_active');
    })
})




//load-page     
$('.load-page').fadeOut(1600);












  
