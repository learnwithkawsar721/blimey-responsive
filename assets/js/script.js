const navbarbutton = document.querySelector('#navbarbutton');
navbarbutton.addEventListener('click', function () {
    const navbarToggleShow = document.querySelector('#navbarToggleShow');
    navbarToggleShow.classList.toggle('show');
    navbarToggleShow.classList.toggle('collapsing');
});
$('.client__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    Infinity: false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,

    // the magic
    responsive: [
        {

        breakpoint: 1900,
        settings: {
            slidesToShow: 6,
            infinite: true
        }

        },
        {

        breakpoint: 1201,
        settings: {
            slidesToShow: 6,
            infinite: true
        }

        },
        {

        breakpoint: 1024,
        settings: {
            slidesToShow: 6,
            infinite: true
        }

        },
        {

        breakpoint: 767,
        settings: {
            slidesToShow: 4,
            infinite: true
        }

        },
        {

        breakpoint: 480,
        settings: {
            slidesToShow: 3,
            dots: true
        }

        },
        {

        breakpoint: 320,
        settings: {
            slidesToShow: 2,
            dots: true
        }

        },
        ]
});

// const navbar = document.querySelector('#navbar');
// var dist = navbar.offsetTop;
// window.scroll(function () {
    
//     var scrooling = this.scrollTop();
//     console.dir(scrooling);
// })
$(function () {
    var dist = $('.navbar').offset().top;
    console.log($('.navbar').offset());
    // alert(dist)
    $(window).scroll(function () {
        var scrooling = $(this).scrollTop();
        if (scrooling >= dist) {
            $('.navbar').addClass('stikey');
        } else {
            $('.navbar').removeClass('stikey');
        }
    });
  

})
