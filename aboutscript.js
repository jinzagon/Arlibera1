$(window).scroll(function(e){
  parallax();
});
function parallax(){
  var scrolled = $(window).scrollTop();
  $('.bg').css('top',-(scrolled*0.4)+'px');
  $('.image').css('top',-(scrolled*0.1)+'px');
  $('.row').css('top',-(scrolled*2.2)+'px');
}
