$(window).load(function () {

  $("#load").fadeOut("slow");;
});


const res ={
  0:
  {items:1},
  320:
  {items: 1},
  560:
  {items: 2},
  960:
  {items:3}
}






function hello() 
{
    var x = document.getElementById("hell");
    if (x.className == "nav") 
    x.className += " collapse";
    else
      x.className = "nav";
}

function reset()
{
  var x = document.getElementById("hell");
  x.className = "nav";
  

}


$(document).ready(function () {


  $('.owl-carousel').owlCarousel(
    {
      loop:true,
      autoplay:true,
      autoplayTimeout:5000,
      dots:false,
      nav:true,
      responsive:res,
      navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
      
    }
  );

  AOS.init();
  $('img[usemap]').rwdImageMaps();




});

