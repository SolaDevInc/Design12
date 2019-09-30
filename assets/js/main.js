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
    $(".primary-nav-mobile").toggleClass("js-active");
    $(".main-header").toggleClass("js-active");
    //Adds Body so body not move 
    $("html, body").addClass("js-noscroll");
  } else {
    $(this).removeClass("js-active");
    $(".primary-nav-mobile").removeClass("js-active");
    $(".main-header").removeClass("js-active");
    //Adds Body so body not move 
    $("html, body").removeClass("js-noscroll");
  } 
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