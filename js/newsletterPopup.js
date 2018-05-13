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

    setTimeout(function(){ newsletter.style.display = "block"; }, 1000);

});

document.getElementById("close-btn").addEventListener("click", function(){
    newsletter.style.display = "none";
});
});
