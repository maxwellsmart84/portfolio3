$(document).ready(function (){
  'use strict';
  page.init();
});


var page = {
  init: function (){
    page.initEvents();
  };

  initEvents: function(){
    page.scrollMagicIntro();
  },

  scrollMagicIntro: function(){
    //Declaring SCrollMagic target and GSAP animation params
    var scrollMagicCtrl = new ScrollMagic();
    var tw= TweenMax.to('.rocket', 0.5, {
    top: '200'
  });
  //Declaring
  var scene = new ScrollScene({
    triggerElement: '.intro',
    offset: 150 /* offset the trigger 150px below #scene's top */
  })
  .setTween(tween)
  .addTo(scrollMagicCtrl);
  scene.addIndicators();
}
