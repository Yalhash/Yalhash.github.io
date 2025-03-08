$(document).ready(function() {
    // Add a click event listener to all images
    $(".projectImg").click(function() {
        // Get the current image source and create a new image element
        var src = $(this).attr("src");

        var img = $("<img>").attr("src", src);
        // Set CSS properties for the expanded image
        // It will be larger and cover most of the screen
        img.css({
            "position": "fixed",
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)",
            "max-height": "90vh",
            "max-width": "90vw",
            "box-shadow": "0px 0px 30px rgba(0, 0, 0, 0.5)",
            "z-index": "9999"
        });
        
        // Add the expanded image to the page
        $("body").append(img);
        // Get the hidden overlay div.
        var overlay = $("#overlay");
        // Stop hiding the overlay
        overlay.removeClass("hidden")
        // Add a click event listener to the overlay
        overlay.click(function() {
            // hide the overlay and remove the image on click.
            $(this).addClass("hidden");
            img.remove();
        });
    });
});
