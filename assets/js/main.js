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
var shareLink = $('<div class="pullquote-share"><a href="#" class="twitter-Share"><i class="icon-twitter"></i></a><a href="#" class="facebook-share"><i class="icon-facebook1"></i></a></div>');
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

$(".facebook-share").on("click", function() {
  var blockquoteText = encodeURIComponent($(this).parent().siblings(".wp-block-pullquote > blockquote > p").text());
  url = "https://m.facebook.com/sharer.php?u=" + pageUrl + "&quote=" + blockquoteText;
  socialWindow(url);
});

$(".twitter-Share").on("click", function() {
  var blockquoteText = encodeURIComponent($(this).parent().siblings(".wp-block-pullquote > blockquote > p").text());
  url = "https://twitter.com/intent/tweet?text=" + pageUrl + ' ' + blockquoteText;
  socialWindow(url);
});

//Defining Content for Social Sharing	For Page title and url;
//Click-Function
$('.fb-share').on('click', function() {
  url = "https://m.facebook.com/sharer.php?u=" + pageUrl;
  socialWindow(url);	
});

$('.twitt-share').on('click', function() {
  url = "https://twitter.com/intent/tweet?text=" + pageUrl;
  socialWindow(url);	
});

// Share Email

function sendMail() {
  var link = 'mailto:?subject=' + pageTitle 
           + '&body=' + window.location;
  window.location.href = link;
  return false;
}

//Copy Link to Clipboard

$(document).ready(function () {
  var $currentUrl = window.location.href;
  $("#input-url").val($currentUrl);
});

function copiedLink() {
  var $copied = $('<div class="copied"><span>Link Copied!</span></div>');
  var $bodyMain = $("main");
  $bodyMain.append($copied);
	setTimeout(function() {
		$copied.remove();
	}, 1000);
}

var clipboard = new ClipboardJS('.copy-link');

clipboard.on('success', function(e) {
  copiedLink();
});

//////////////////////////////
// Browse Dropdown
/////////////////////////////

$(".browse-dropdown").on('click', function() {
  $(this).toggleClass("js-active");
});

///////////////////
//Sermon-Tab
//////////////////

//Variable Setup
var watchTab = $('.watch-tab');
var listenTab = $('.listen-tab');
var downloadTab = $('.download-tab');
var watchContent = $("#watch-content");
var listenContent = $('#listen-content');

//Toggle to listen content when click listen
$(listenTab).click(function(){	
  $(this).addClass('js-current');
	$(this).addClass('js-active');
	$(watchTab).removeClass('js-current');
	$(watchContent).removeClass('js-active');
	$(downloadTab).removeClass('js-current');
	$(listenContent).addClass('js-active');
	$(watchTab).removeClass('js-active');
	$(".sermon-download-opt").removeClass("js-active");
});

//Toggle to watch content when click watch
$(watchTab).click(function(){	
	$(this).addClass('js-current');
	$(this).addClass('js-active');
	$(listenTab).removeClass('js-current');
	$(listenContent).removeClass('js-active');	
	$(downloadTab).removeClass('js-current');
	$(watchContent).addClass('js-active');
	$(listenTab).removeClass('js-active');
	$(".sermon-download-opt").removeClass("js-active");
});

//On click expand downloaditems
$(downloadTab).each(function(){
	var downloaditems = $(this).children(".sermon-download-opt");
	//Click-Function
	$(this).click(function(e){
    event.stopPropagation();
		$(this).toggleClass('js-current');
	//downloaditems should toggle show/hide
	$(downloaditems).toggleClass("js-active");
	});
});

///////////////////
// Share
//////////////////

$(".share-btn").on('click', function(){
  $(this).siblings(".social-share").toggleClass("js-active")
});

///////////////////
// Clamp Text
//////////////////

$('.line-clamp-1').each(function(index, element) {
  $clamp(element, { clamp: 1 });
});

$('.line-clamp-2').each(function(index, element) {
  $clamp(element, { clamp: 2 });
});

$('.line-clamp-3').each(function(index, element) {
  $clamp(element, { clamp: 3 });
});

$('.line-clamp-4').each(function(index, element) {
  $clamp(element, { clamp: 4 });
});

///////////////////
// Click away
//////////////////

var removeClassArray = ['.mob-search', '.browse-dropdown', '.sermon-download-opt', '.social-share', '.browse-resources', '.browse-language'];
$(document).mouseup(function(e) {
  for (var i=0; i < removeClassArray.length; i++) {
    var removeActiveClasses = $(removeClassArray[i]);
    if (!removeActiveClasses.is(e.target) && removeActiveClasses.has(e.target).length == 0) {
      $(removeActiveClasses).removeClass("js-active");
    }
  }
});