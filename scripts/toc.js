// On document load run the following:
$(document).ready(function() {
    // Identify the down arrow links in the search dropdown.
    $("#searchDropdown a.downLink").click(function(event) {
        // Prevent the anchor tag from automatically scrolling to the section
        event.preventDefault();
        // Grab the section id from the href
        var section = $(this).attr("href");
        // Scroll down smoothly to the section id
        $("html, body").animate({
            // Use the section id from before to get its offset
            // subtract 150 to make room for the sticky bar.
            scrollTop: $(section).offset().top - 150
        }, 1000);
    });
  });