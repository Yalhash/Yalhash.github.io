
// Modified from https://www.w3schools.com/howto/howto_js_navbar_sticky.asp

// Once the document is loaded, run the following:
$(document).ready(function(){
  // identifier for the sticky navbar
  var navbarID = '#stickyBar';
  // Get the initial offset position of the navbar
  var stickyOffset = $(navbarID).offset().top;
  
  // Whenever the window is scrolled check if 
  // the navbar needs to be stuck or unstuck from the top of the screen
  $(window).scroll(function () {
    // If the window is passing the navbar's original position
    // stick it to the top of the screen
    if ($(window).scrollTop() > stickyOffset) {
      $(navbarID).addClass('sticky');
    } else {
      // If the screen is above the navbar unstick it from the top of the screen.
      // If it is already unstuck, this does nothing.
      $(navbarID).removeClass('sticky');
    }

  });
});