//console.log("Hello world!");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav_main").style.top = "0";
  } else {
    document.getElementById("nav_main").style.top = "-50px";
  }
}
