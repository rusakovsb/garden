(function ($) {

    $("#search-block-form input.form-search").removeAttr("title");
	
    $("#search-block-form").focusin(function() {
        $(this).addClass("focused");
    }); 

    $("#search-block-form" ).focusout(function() {
        $(this).removeClass("focused");
    });                               

    $(".region-topbar-right").prepend('<button class="mobile-menu-toggle" id=""><span></span><span></span><span></span></button>');
	
    $(".mobile-menu-toggle").click(function () {	
	    $(this).toggleClass("active");
        $(".menu--mobile-menu").slideToggle("fast");
    });	
	
    $("#sidebar-left").prepend('<div id="left-menu-panel"><button class="left-menu-toggle"><span></span><span></span><span></span></button></div>');
	
    $(".left-menu-toggle").click(function() {               
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
                x: "-300px"
            })     
        }
    });
	
    $(".file--x-office-document a").attr("target","_blank");
    $(".file--application-pdf a").attr("target","_blank");
	
    $("ul.hierarchical-taxonomy-menu > li.menu-item--expanded > a").contents().unwrap().wrap("<h5>");
    $("ul.hierarchical-taxonomy-menu li ul li.menu-item--expanded").removeClass("menu-item--expanded");	 
    
    $(".masonry").imagesLoaded( function() {
        $(".masonry .view-content").masonry({      
          itemSelector: '.masonry-item',
        })         
    });

})(jQuery);