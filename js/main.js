(function ($) {

    $("#search-block-form input.form-search").removeAttr("title");
	
    $("#search-block-form").focusin(function() {
        $(this).addClass("focused");
    }); 

    $("#search-block-form" ).focusout(function() {
        $(this).removeClass("focused");
    });                               

    $("#block-mobilemenu").prepend('<div class="mobile-menu-open" id="mobile-menu-button"><span></span><span></span><span></span></div>');
	
    $("#mobile-menu-button").click(function () {	
	    $(this).toggleClass("mobile-menu-open mobile-menu-close");
	    $("#block-mobilemenu").toggleClass("mobile-menu-expanded");
        $("#block-mobilemenu .menu").slideToggle("fast");
    });	
	
    $("#block-leftmenu").prepend('<div class="left-menu-open" id="left-menu-button"><span></span><span></span><span></span></div>');
	
    $("#left-menu-button").click(function () {	
	    $(this).toggleClass("left-menu-open left-menu-close");
        $("#sidebar-first").toggleClass("sidebar-first-expanded");
    });	
	
    $(".file--x-office-document a").attr("target","_blank");
    $(".file--application-pdf a").attr("target","_blank");
	
    $("ul.hierarchical-taxonomy-menu > li.menu-item--expanded > a").contents().unwrap().wrap("<h5>");
    $("ul.hierarchical-taxonomy-menu li ul li.menu-item--expanded").removeClass("menu-item--expanded");	  
        
})(jQuery);