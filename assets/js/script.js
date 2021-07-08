const navbarbutton = document.querySelector('#navbarbutton');
navbarbutton.addEventListener('click', function () {
    const navbarToggleShow = document.querySelector('#navbarToggleShow');
    navbarToggleShow.classList.toggle('show');
    navbarToggleShow.classList.toggle('collapsing');
});