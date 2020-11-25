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

  function onSignIn(googleUser) {
                var profile = googleUser.getBasicProfile();
                console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
                console.log('Name: ' + profile.getName());
                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
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
  
});
