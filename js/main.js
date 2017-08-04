$(document).ready(function () {
    //for slider plugin
    $('.bxslider').bxSlider({controls: false,
        infiniteLoop: true,
        captions: true,
        auto: true,
        autoHover: true});

    //for the date picker plugin
    $('#date').pickadate();
    //for the time picker plugin
    $('#hour').pickatime();

    //go to contact page when clicking the reservation button (custom jQuery)
    $('.reserve').click(function () {
        window.location.href = 'contact.html';
    });

    //rotate the logo on hover (custom javascript)
    var logo = document.getElementById('rotate');
    logo.addEventListener('mouseover', function () {
        logo.style.transform = 'rotate(180deg)';
    });
    logo.addEventListener('mouseleave', function () {
        logo.style.transform = 'rotate(360deg)';
    });
});
