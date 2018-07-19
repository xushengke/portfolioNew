(function () {

  var headers1 = document.querySelector('#mainHeader');
  var navigation = document.querySelector('#main-menu');
  var nav = navigation.querySelectorAll('a');
  var logo = document.querySelector('#promoLogo');
  var hammenu = document.querySelector('.menu-icon');

  function changebcg() {
    $(window).bind("scroll", function(){
        var top = $(this).scrollTop();
        var ss = top * '0.05';
        // console.log(ss);
        if (top >= 80){
          headers1.style.background = "white";
          headers1.style.height = "4.2" + "em";
          logo.style.transform = "scale(2)";
          // logo.style.transform = "scale("+ss+")";
          logo.style.opacity = "0";
          $('<style>.menu-icon::after{background:black; box-shadow: 0 0.4375em 0 #000000, 0 0.875em 0 #000000;}</style>').appendTo('head');
          nav.forEach(function(element){
          element.style.color = "black";
          navigation.style.paddingTop = "1.5" + "em";
     });
        }else{
          headers1.style.background = "black";
          headers1.style.height = "5" + "em";
          logo.style.transform = "scale(1)";
          logo.style.opacity = "1";
          $('<style>.menu-icon::after{background:white; box-shadow: 0 0.4375em 0 #ffffff, 0 0.875em 0 #ffffff;}</style>').appendTo('head');
          nav.forEach(function(element){
          element.style.color = "white";
          navigation.style.paddingTop = "2" + "em";

     });
        }
  });


  }

  window.addEventListener('load', changebcg, false);

})();
