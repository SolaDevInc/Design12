///////////////////
// Touch Effect
//////////////////

$(document).ready(function() {
  $('.touch-effect').on('touchstart touchend', function(e) {
      $(this).toggleClass('js-touch');
      setTimeout(function() {
        $(this).removeClass("js-touch");
      }, 500);
  });
});

///////////////////
//Mobile Menu
///////////////////

$(".menu-icon").click(function(){
  $(this).toggleClass("js-active");
  if($(this).hasClass('js-active')){
    $(".primary-nav-mobile").addClass("js-open");
    $(".navigation").addClass("js-active");
    //Adds Body so body not move 
    $("html, body").addClass("js-noscroll");
  } else {
    $(this).removeClass("js-active");
    $(".primary-nav-mobile").removeClass("js-open");
    $(".navigation").removeClass("js-active");
    //Adds Body so body not move 
    $("html, body").removeClass("js-noscroll");
  }
});

///////////////////
//Search 
///////////////////

function toggleSearchBar() {
	var btn = $(".search-btn");
	
	//Adds form type so CSS can change make it appear
	$(".search").toggleClass("js-active");
	$(".search-form").toggleClass("js-open");

	if (btn.hasClass("js-active")) {
		$("body").on("click", hideSearchBar);
	}
	else {
		$("body").off("click", hideSearchBar);
	}
}

function hideSearchBar(e) {
	if ($(e.target).closest(".search").length > 0) {
		return;
	}
	
	toggleSearchBar();
}

$(".search-btn").click(toggleSearchBar);

// Close search 
$(".search-close-btn").click(function(){
	//Remove search so jS can change make it disappear
  $(".search").removeClass("js-active");
	$(".search-form").removeClass("js-open");
});