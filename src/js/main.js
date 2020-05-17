(function ($) {

    // Search form

    $("#search-block-form").focusin(function() {
        $(this).addClass("focused");
    }); 

    $("#search-block-form" ).focusout(function() {
        $(this).removeClass("focused");
    });       
    
    // Sidebar

    $("#sidebar-left").prepend('<button class="sidebar-toggle"><span></span><span></span><span></span></button>');
	
    $(".sidebar-toggle").click(function() {               
        if(!$(this).hasClass("active")) {  
            $(this).addClass("active");          
            TweenMax.to("#sidebar-left", 1, {
                ease: Expo.easeInOut,
                x: "0"     
            })       
        }
        else {      
            $(this).removeClass("active");      
            TweenMax.to("#sidebar-left", 1, {                
                ease: Expo.easeInOut,
                x: "-20rem"
            })     
        }
    });

    // Files
	
    $(".file--x-office-document a").attr("target","_blank");
    $(".file--application-pdf a").attr("target","_blank");
	
    $("ul.hierarchical-taxonomy-menu > li.menu-item--expanded > a").contents().unwrap().wrap("<h5>");
    $("ul.hierarchical-taxonomy-menu li ul li.menu-item--expanded").removeClass("menu-item--expanded");	 

    // Masonry
    
    $(".masonry").imagesLoaded( function() {
        $(".masonry .view-content").masonry({      
          itemSelector: '.masonry-item',
        })         
    });

    // Mobile menu

    $(".region-topbar-right").prepend('<button class="mobile-nav-toggle"><span></span><span></span><span></span></button>');
	
    $(".mobile-nav-toggle").click(function() {               
        if(!$(this).hasClass("active")) {  
            $(this).addClass("active");          
            TweenMax.to("#mobile-nav", 0.3, {
                ease: Power1.easeOut,
                visibility: "visible",
                opacity: "1"     
            })       
        }
        else {      
            $(this).removeClass("active");      
            TweenMax.to("#mobile-nav", 0.3, {                
                ease: Power1.easeOut,
                opacity: "0",
                onComplete: function() {
                    $("#mobile-nav").css("visibility", "hidden");
            }});      
        }
    });

    // Map link

    $(".map-link").attr({
        "data-colorbox-inline": "#block-map",
        "data-width": "1550px"
    });

})(jQuery);