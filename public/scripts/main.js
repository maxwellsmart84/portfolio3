$(document).ready(function (){
  'use strict';
  page.init();
});


var page = {
  init: function (){
    page.initEvents();
  },

  initEvents: function(){
    page.scrollMagicIntro();
    page.scrollMagicPhotoBreak1();
    page.scrollMagicPhotoBreak2();
    page.scrollMagicPhotoBreak3();
  },

  scrollMagicIntro: function(){
    //Declaring SCrollMagic target and GSAP animation params
  var scrollMagicCtrl = new ScrollMagic.Controller();
  var timeLine = new TimelineMax();
  var launchRed =  TweenMax.to('#launch', 1, {
    color:'#b40f0f',
    fontSize:'100px'
  }, 0);
  var rocketMoveAnim= TweenMax.to('.rocket', 2, {
    top: '-800'
  }, 0);
  //ADDING ANIMATIONS TO TIMELINE
  timeLine
    .add(launchRed)
    .add(rocketMoveAnim);

  //Declaring Scene 1 (Triggering Rocket at 500px)
  var scene = new ScrollMagic.Scene({
    triggerElement: 'body',
    offset: 500 /* offset the trigger 500px below #scene's top */
  })
  .setTween(timeLine)
  .addTo(scrollMagicCtrl);
  scene.addIndicators({name:"Rocket Start"});

  //Declaring Scene 2 (Ready to launch text pinned)
  var scene2 = new ScrollMagic.Scene({
    triggerElement: '.intro',
    duration: 670,
    reverse: true
  })
  .setPin('#introText', {pushFollowers:false})
  .addTo(scrollMagicCtrl);
  scene.addIndicators({name: "Text Start"});
},

  scrollMagicPhotoBreak1: function(){
    var scrollMagicCtrl = new ScrollMagic.Controller();
    var authorAppear = TweenMax.to('#picasso', 2,{
      opacity: 1
    });
    //REVEAL QUOTE SCENE
    var scene = new ScrollMagic.Scene({
      triggerElement:'.photo-break-1',
      offset: 250,
      reverse:false
    })
    .setTween(authorAppear)
    .addTo(scrollMagicCtrl);
    scene.addIndicators({name: "Picasso start"});
    //PIN QUOTE SCENE
    var scene2 = new ScrollMagic.Scene({
      triggerElement:'.photo-break-1',
      duration: 240,
      reverse:false
    })
    .setPin('#quote1', {pushFollowers:false})
    .addTo(scrollMagicCtrl);
},

  scrollMagicPhotoBreak2: function(){
    var scrollMagicCtrl = new ScrollMagic.Controller();
    var authorAppear = TweenMax.to('#adams', 2,{
      opacity: 1
    });
    //REVEAL QUOTE SCENE
    var scene = new ScrollMagic.Scene({
      triggerElement:'.photo-break-2',
      offset: 250,
      reverse:false
    })
    .setTween(authorAppear)
    .addTo(scrollMagicCtrl);
    scene.addIndicators({name: "Adams start"});
    //PIN QUOTE SCENE
    var scene2 = new ScrollMagic.Scene({
      triggerElement:'.photo-break-2',
      duration: 240,
      reverse:false
    })
    .setPin('#quote2', {pushFollowers:false})
    .addTo(scrollMagicCtrl);
  },

  
  scrollMagicPhotoBreak3: function(){
    var scrollMagicCtrl = new ScrollMagic.Controller();
    var authorAppear = TweenMax.to('#clarke', 2,{
      opacity: 1
    });
    //REVEAL QUOTE SCENE
    var scene = new ScrollMagic.Scene({
      triggerElement:'.photo-break-3',
      offset: 250,
      reverse:false
    })
    .setTween(authorAppear)
    .addTo(scrollMagicCtrl);
    scene.addIndicators({name: "Clarke start"});
    //PIN QUOTE SCENE
    var scene2 = new ScrollMagic.Scene({
      triggerElement:'.photo-break-3',
      duration: 240,
      reverse:false
    })
    .setPin('#quote3', {pushFollowers:false})
    .addTo(scrollMagicCtrl);
  }


//OBJ LITERAL ENDING  DO NOT DELETE BELOW HERE

};
