const navbarbutton = document.querySelector('#navbarbutton');
navbarbutton.addEventListener('click', function () {
    const navbarToggleShow = document.querySelector('#navbarToggleShow');
    navbarToggleShow.classList.toggle('show');
    navbarToggleShow.classList.toggle('collapsing');
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
    })
})