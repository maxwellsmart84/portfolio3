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
    page.countdownTimer5();
    page.countdownTimer4();
    page.countdownTimer3();
    page.countdownTimer2();
    page.countdownTimer1();
  },

  countdownTimer5: function(){
    var scrollMagicCtrl = new ScrollMagic.Controller();
    var timeLine = new TimelineMax();
    var countDownNumBig = TweenMax.to('#countNum5', 1, {
        scale: 1.5,
        color: '#b40f0f'
    });
    var countDownNumSm = TweenMax.to('#countNum5', 1, {
        scale:1,
        color: 'white'
    });
    timeLine
      .add(countDownNumBig)
      .add(countDownNumSm);
      var scene = new ScrollMagic.Scene({
        triggerElement:'#countDown5',
        offset: 250,
        reverse:true
      })
      .setTween(timeLine)
      .addTo(scrollMagicCtrl);
  },

  countdownTimer4: function(){
    var scrollMagicCtrl = new ScrollMagic.Controller();
    var timeLine = new TimelineMax();
    var countDownNumBig = TweenMax.to('#countNum4', 1, {
        scale: 1.5,
        color: '#b40f0f'
    });
    var countDownNumSm = TweenMax.to('#countNum4', 1, {
        scale:1,
        color: 'white'
    });
    timeLine
      .add(countDownNumBig)
      .add(countDownNumSm);
      var scene = new ScrollMagic.Scene({
        triggerElement:'#countDown4',
        offset: 250,
        reverse:true
      })
      .setTween(timeLine)
      .addTo(scrollMagicCtrl);
  },

  countdownTimer3: function(){
    var scrollMagicCtrl = new ScrollMagic.Controller();
    var timeLine = new TimelineMax();
    var countDownNumBig = TweenMax.to('#countNum3', 1, {
        scale: 1.5,
        color: '#b40f0f'
    });
    var countDownNumSm = TweenMax.to('#countNum3', 1, {
        scale:1,
        color: 'white'
    });
    timeLine
      .add(countDownNumBig)
      .add(countDownNumSm);
      var scene = new ScrollMagic.Scene({
        triggerElement:'#countDown3',
        offset: 250,
        reverse:true
      })
      .setTween(timeLine)
      .addTo(scrollMagicCtrl);
  },
  countdownTimer2: function(){
    var scrollMagicCtrl = new ScrollMagic.Controller();
    var timeLine = new TimelineMax();
    var countDownNumBig = TweenMax.to('#countNum2', 1, {
        scale: 1.5,
        color: '#b40f0f'
    });
    var countDownNumSm = TweenMax.to('#countNum2', 1, {
        scale:1,
        color: 'white'
    });
    timeLine
      .add(countDownNumBig)
      .add(countDownNumSm);
      var scene = new ScrollMagic.Scene({
        triggerElement:'#countDown2',
        offset: 250,
        reverse:true
      })
      .setTween(timeLine)
      .addTo(scrollMagicCtrl);
  },
  countdownTimer1: function(){
    var scrollMagicCtrl = new ScrollMagic.Controller();
    var timeLine = new TimelineMax();

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
 },

  scrollMagicPhotoBreak1: function(){
    //FADE IN AUTHOR NAME
    var scrollMagicCtrl = new ScrollMagic.Controller();
    var authorAppear = TweenMax.to('#picasso', 2,{
      opacity: 1
    });
    var scene = new ScrollMagic.Scene({
      triggerElement:'.photo-break-1',
      offset: 250,
      reverse:true
    })
    .setTween(authorAppear)
    .addTo(scrollMagicCtrl);
    scene.addIndicators({name: "Picasso start"});
    //PIN QUOTE SCENE
    var scene2 = new ScrollMagic.Scene({
      triggerElement:'.photo-break-1',
      duration: 240,
      reverse:true
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
      reverse:true
    })
    .setTween(authorAppear)
    .addTo(scrollMagicCtrl);
    //PIN QUOTE SCENE
    var scene2 = new ScrollMagic.Scene({
      triggerElement:'.photo-break-2',
      duration: 240,
      reverse:true
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
      reverse:true
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
