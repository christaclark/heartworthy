/* SMOOTH SCROLL */

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/* HAMBURGER MENU */

 $(document).ready(function() {
   $("#spinner-form2").click(function () {
   $("#navigationlinks").toggle()
});
});

/* PORTFOLIO POSTS CHANGE */

$(function(){
    "use strict";
    $('.PortSwap').hide().eq(0).addClass('active').show();
});

function prev(){
    var current = $('.PortSwap.active'), prev = current.prev('.PortSwap');
    console.log(prev.length, prev)
    if(prev.length){
        current.hide().removeClass('active');
        prev.addClass('active').show();
    }
}
function next(){
    var current = $('.PortSwap.active'), next = current.next('.PortSwap');
    if(next.length){
        current.hide().removeClass('active');
        next.addClass('active').show();
    }
}