$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();

    $('.sidenav-click').click(function () {
        $('.sidenav').sidenav('close');
    });
});