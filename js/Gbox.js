//load-page     
$('.load-page').fadeOut(1600);

// BacktoTop
$(document).ready(function(){
    $(this).on('scroll',function(){
        let scrollTop = document.documentElement.scrollTop;
            //console.log(scrollTop);
            $('.backtoTop_img').on('click',function(){
                window.scrollBy({
                    top: -6643,
                    behavior: "smooth",
                    })
            })
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

    // AOS
    AOS.init({
        duration: 1200,
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


    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false
    });

})


// let play = document.querySelector('.studio-detail');
// play.addEventListener('click',function(){
// document.querySelector('.video_wooder').classList.add('video_active');
//     document.querySelector('.video_wooder iframe').attributes('src','https://www.youtube.com/watch?v=EUhIIbiFrCs&feature=emb_logo');
// })

var fullScreen = $('.project01 .container .fullcreen img');
$(this).on('click', function() {
    
})












  