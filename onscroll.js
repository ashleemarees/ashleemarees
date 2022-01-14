// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var ol = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = sectionnav.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    myold.classList.add("sticky");
  } else {
    myol.classList.remove("sticky");
  }
}