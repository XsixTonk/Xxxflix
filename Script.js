$(document).ready(function(){
    // When any iframe inside a video-card is clicked
    $('.video-card .video-iframe').on('click', function(){
        // Get the src of the clicked iframe
        var iframeSrc = $(this).attr('src');
        
        // Create overlay div
        var overlay = $('<div class="overlay" id="overlay"></div>');
        
        // Create video container
        var videoContainer = $('<div class="video-container"></div>');
        
        // Create iframe with the same src
        var iframe = $('<iframe width="560" height="315" src="' + iframeSrc + '" frameborder="0" allowfullscreen></iframe>');
        
        // Append iframe to video container
        videoContainer.append(iframe);
        
        // Append video container to overlay
        overlay.append(videoContainer);
        
        // Append close button to overlay
        overlay.append('<span class="close-button">&times;</span>');
        
        // Append overlay to body
        $('body').append(overlay);
        
        // Show overlay
        overlay.fadeIn();
        
        // Disable scrolling on body
        $('body').css('overflow', 'hidden');
        
        // When overlay is clicked
        overlay.on('click', function(){
            // Hide overlay
            $(this).fadeOut();
            
            // Remove overlay from DOM
            $(this).remove();
            
            // Enable scrolling on body
            $('body').css('overflow', 'auto');
        });
        
        // When close button is clicked
        $('.close-button').on('click', function(){
            // Hide overlay
            overlay.fadeOut();
            
            // Remove overlay from DOM
            overlay.remove();
            
            // Enable scrolling on body
            $('body').css('overflow', 'auto');
        });
        
        // Prevent default action of iframe click
        return false;
    });
});
