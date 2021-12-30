$(document).ready(function() {
    // Toggle menu on click
    $("#navbar.responsive").click(function() {
      toggleBodyClass(".navbar.responsive.icon");
    });
  
    function toggleBodyClass(className) {
      document.body.classList.toggle(className);
    }
  
   });