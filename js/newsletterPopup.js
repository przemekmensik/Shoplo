/*
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    console.log("newsletter popup")

    var newsletter = document.getElementById("newsletter") ;
    console.log(newsletter);

    newsletter.addEventListener("click", function ()  {
       console.log("newsletter popup");
    });

    body.addEventListener("onload", function() {
      alert("Newsletter loaded");
    });


  });
*/
/*
$(window).("load", function() {
   alert("alert");// code here
});


$(function() {
alert("alert"); // code here
});
*/
document.addEventListener("DOMContentLoaded", function(event) {

window.addEventListener("load", function(){

    var newsletter = document.getElementById("newsletter");
    var modal = document.querySelector(".modal");


    setTimeout(function(){ newsletter.style.display = "block"; modal.style.display = "block";}, 1000);

});
  var modal = document.querySelector(".modal");
  console.log(modal);
document.getElementById("close-btn").addEventListener("click", function(){
    newsletter.style.display = "none";
    modal.style.display = "none";
});

//top notification bar text color

$("#color").change(function () {
    var color = $(this).val()
    $('.notification-content').css('color', color);
}).change();


//top notification bar background-color
$("#background").change(function () {
    var background = $(this).val()
    $('.notification').css('background-color', background);
}).change();

//close notification bar
$("#notification-close-btn").click(function(){
    $(".notification").hide();
    console.log("dziala hide");
});

//choose between hide and show bar
$("#show-notification").click(function () {
    var option = $(this).val()
      if (option === "show"){
          $(".notification").show();
      }else{
          $(".notification").hide();
  }
});

});
