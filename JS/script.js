// Function used to shrink nav bar removing paddings and adding black background
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});
$(document).ready(function () {

    $('.navTrigger').click(function () {
        $(this).toggleClass('active');
        console.log("Clicked menu");
        $("#mainListDiv").toggleClass("show_list");
        $("#mainListDiv").fadeIn();

    });

    $('.navlinks').click(function () {
        $('.navTrigger').toggleClass('active');
        console.log("Clicked menu");
        $("#mainListDiv").toggleClass("show_list");
        $("#mainListDiv").fadeIn();

    });
    
    $("#wayanadBtn").click(function (){
        window.open("HTML/wayanad.html", "_self");
    });

    $("#facilitiesBtn").click(function (){
        window.open("HTML/facilities.html", "_self");
    });

    $("#galleryBtn").click(function (){
        window.open("HTML/gallery.html", "_self");
    });

});
