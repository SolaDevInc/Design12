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

function toggleMenu() {
	var menubtn = $(".menu-icon");
	menubtn.toggleClass("js-active");
	
	//Adds form type so CSS can change make it appear
	$(".primary-nav-mobile").toggleClass("js-active");
  $(".main-header").toggleClass("js-active");
  //Adds Body so body not move 
  $("html, body").toggleClass("js-noscroll");

	if (menubtn.hasClass("js-active")) {
		$("body").on("click", hideMenu);
	}
	else {
		$("body").off("click", hideMenu);
	}
}

function hideMenu(e) {
	if ($(e.target).closest(".menu-icon").length > 0) {
		return;
  } else if ($(e.target).closest(".primary-nav-mobile").length > 0) {
		return;
  }
  
	toggleMenu();
}

$(".menu-icon").click(toggleMenu);

$(".menu-icon.js-active").click(function(){
  $(this).removeClass("js-active");
  $(".primary-nav-mobile").removeClass("js-active");
  $(".main-header").removeClass("js-active");
  //Adds Body so body not move 
  $("html, body").removeClass("js-noscroll");
});


$(window).on("load resize",function(){
  ///Check height of primary nav
  if($(window).width() < 992) {
    //Get height of resource type nav
    var navHeight = $('.main-header').height();
    var wpBarHeight = $('#wpadminbar').height();
    var totalHeaderHeight = navHeight + wpBarHeight;
    //Apply measurement to dropdown
    $(".primary-nav-mobile").css("top", navHeight);
    $(".primary-nav-mobile").css("top", totalHeaderHeight);
  }
});

///////////////////
//Search 
///////////////////

// Mob Search

$(".mob-search-btn").click(function() {
  $(".mob-search").toggleClass("js-active");
  $(".menu-icon").removeClass("js-active");
  $(".primary-nav-mobile").removeClass("js-active");
  $(".main-header").removeClass("js-active");
  //Adds Body so body not move 
  $("html, body").removeClass("js-noscroll");
});

// Close search 
$(".mob-search-close-btn").click(function(){
	//Remove search so jS can change make it disappear
  $(".mob-search").removeClass("js-active");
});

// Desktop Search
function toggleSearchBar() {
	var btn = $(".search-close-btn");
	btn.toggleClass("js-active");
	
	//Adds form type so CSS can change make it appear
	$(".search").toggleClass("js-active");
	$(".search-form").toggleClass("js-active");

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

$(".search-close-btn").click(toggleSearchBar);

$(".search-close-btn.js-active").click(function() {
  $(this).removeClass("js-active");
  $(".search").removeClass("js-active");
	$(".search-form").removeClass("js-active");
});

////////////////
// Slick-slider
////////////////

// Banner-Featured

$('.banner-featured-slider').slick({
  arrows: false,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 1800,
  pauseOnFocus: false,
	pauseOnHover: false,
  accessibility: false,
  responsive: [
    {
      breakpoint: 9999,
      settings: "unslick"
    },
    {
      breakpoint: 992,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: 'slick-dots featured-dots',
      }
    }
  ]
});

//////////////////////////////
// Sidebar Dropdown
/////////////////////////////

//Add dropdown arrow to all li items have Ul subitems

var subMenuItems = $( ".sidebar-nav > ul > li:has(ul)" );
var dropdownArrow = $('<button><i class="icon-triangle-right"></i></button>');

$(subMenuItems).append(dropdownArrow);

/////////////////////////
// Pull quotes
////////////////////////

//Variables
var pageUrl = encodeURIComponent(document.URL);
var pageTitle = encodeURIComponent($(".page-title").text());
var blockPullquote = $(".wp-block-pullquote > blockquote");

//Add Share Buttons to Blockquote in DOM
var shareLink = $('<div class="pullquote-share"><a href="#" class="tweet-Share"><i class="icon-twitter"></i></a><a href="#" class="facebook-share"><i class="icon-facebook1"></i></a></div>');
$(blockPullquote).append(shareLink); 

//Popup Window
function socialWindow(url) {
  var left = (screen.width - 570) / 2;
  var top = (screen.height - 570) / 2;
  var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
  // Setting 'params' to an empty string will launch
  // content in a new tab or window rather than a pop-up.
  // params = "";
  window.open(url,"NewWindow",params);
}

//Defining Content for Social Sharing	For Pullquotes
//Click-Function

jQuery(".facebook-share").on("click", function() {
  var blockquoteText = encodeURIComponent($(this).parent().siblings(".wp-block-pullquote > blockquote > p").text());
  url = "https://m.facebook.com/sharer.php?u=" + pageUrl + "&quote=" + blockquoteText;
  socialWindow(url);
});

jQuery(".tweet-Share").on("click", function() {
  var blockquoteText = encodeURIComponent($(this).parent().siblings(".wp-block-pullquote > blockquote > p").text());
  url = "https://twitter.com/intent/tweet?text=" + pageUrl + ' ' + blockquoteText;
  socialWindow(url);
});


///////////////////
// Click away
//////////////////

var removeClassArray = ['.mob-search', '.book-download-btn', '.browse-language-btn', '.browse-resource-btn', '.browse-resources', '.browse-language'];
$(document).mouseup(function(e) {
  for (var i=0; i < removeClassArray.length; i++) {
    var removeActiveClasses = $(removeClassArray[i]);
    if (!removeActiveClasses.is(e.target) && removeActiveClasses.has(e.target).length == 0) {
      $(removeActiveClasses).removeClass("js-active");
    }
  }
});