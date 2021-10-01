// const parallax = document.getElementById("parallax")

// window.addEventListener("scroll", function() {
//     let offset = window.pageYOffset
//     parallax.style.backgroundPositionY = offset * 1.5 + "px"
// })



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}