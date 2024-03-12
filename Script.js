$(document).ready(function(){
    // Function to create overlay
    function createOverlay() {
        // Create overlay div
        var overlay = $('<div class="overlay"></div>');
        
        // Style overlay
        overlay.css({
            'position': 'fixed',
            'top': '0',
            'left': '0',
            'width': '100%',
            'height': '100%',
            'background': 'rgba(0, 0, 0, 0.7)',
            'z-index': '9999',
            'display': 'none'
        });
        
        // Create close button
        var closeButton = $('<span class="close-button">&times;</span>');
        
        // Style close button
        closeButton.css({
            'position': 'absolute',
            'top': '10px',
            'right': '10px',
            'color': '#fff',
            'font-size': '20px',
            'cursor': 'pointer',
            'z-index': '99999'
        });
        
        // Append close button to overlay
        overlay.append(closeButton);
        
        // Append overlay to body
        $('body').append(overlay);
        
        return overlay;
    }
    
    // When any iframe inside a video-card is clicked
    $('.video-card .video-iframe').on('click', function(){
        // Get the src of the clicked iframe
        var iframeSrc = $(this).attr('src');
        
        // Create overlay
        var overlay = createOverlay();
        
        // Create video container
        var videoContainer = $('<div class="video-container"></div>');
        
        // Create iframe with the same src
        var iframe = $('<iframe class="overlay-iframe" width="560" height="315" src="' + iframeSrc + '" frameborder="0" allowfullscreen></iframe>');
        
        // Append iframe to video container
        videoContainer.append(iframe);
        
        // Append video container to overlay
        overlay.append(videoContainer);
        
        // Show overlay
        overlay.fadeIn();
        
        // Disable scrolling on body
        $('body').css('overflow', 'hidden');
        
        // Prevent default action of iframe click
        return false;
    });
    
    // When close button is clicked
    $('body').on('click', '.close-button', function(){
        // Hide overlay
        $('.overlay').fadeOut();
        
        // Remove src from overlay iframe
        $('.overlay .overlay-iframe').attr('src', '');
        
        // Enable scrolling on body
        $('body').css('overflow', 'auto');
    });
    
    // When overlay is clicked
    $('body').on('click', '.overlay', function(e){
        // Check if the clicked element is the overlay itself
        if ($(e.target).hasClass('overlay')) {
            // Hide overlay
            $(this).fadeOut();
            
            // Remove src from overlay iframe
            $(this).find('.overlay-iframe').attr('src', '');
            
            // Enable scrolling on body
            $('body').css('overflow', 'auto');
        }
    });
});
