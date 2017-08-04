$(document).ready(function () {
    //for the date picker plugin
    $('#date').pickadate();
    //for the time picker plugin
    $('#hour').pickatime();

    //go to contact page when clicking the reservation button
    $('.reserve').click(function () {
        window.location.href = 'contact.html';
    });
});
