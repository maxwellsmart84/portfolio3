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
    page.clickEvtWorkView();
    page.clickEvtAboutView();
    page.clickEvtHomeView();
    page.instaFeedJS();
  },





///////////////////// BEGIN ANIMATIONS ////////////////////////////////
//////////////////////////////////////////////////////////////////////

  countdownTimer5: function(){
    var scrollMagicCtrl = new ScrollMagic.Controller();
    var timeLine = new TimelineMax({repeat: 10, repeatDelay: 2.5, yoyo:true});
    var countDownNumBig = TweenMax.to('#countNum5', 1, {
        scale: 1.3
    });
    var countDownNumSm = TweenMax.to('#countNum5', 1, {
        scale:1 ,
        color: 'white'
    });
    timeLine
      .add(countDownNumBig)
      .add(countDownNumSm);
      var scene = new ScrollMagic.Scene({
        triggerElement:'#countDown5',
        reverse:false
      })
      .setTween(timeLine)
      .addTo(scrollMagicCtrl);
      scene.addIndicators({name: "Clarke start"});

  },

  countdownTimer4: function(){
    var scrollMagicCtrl = new ScrollMagic.Controller();
    var timeLine = new TimelineMax({repeat: 10, repeatDelay: 2.5, yoyo:true});
    var countDownNumBig = TweenMax.to('#countNum4', 1, {
        scale: 1.5
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
        reverse:true
      })
      .setTween(timeLine)
      .addTo(scrollMagicCtrl);
  },

  countdownTimer3: function(){
    var scrollMagicCtrl = new ScrollMagic.Controller();
    var timeLine = new TimelineMax({repeat: 10, repeatDelay: 2.5, yoyo:true});
    var countDownNumBig = TweenMax.to('#countNum3', 1, {
        scale: 1.5
    });
    var countDownNumSm = TweenMax.to('#countNum3', 1, {
        scale:1,
        color: 'white',
    });
    timeLine
      .add(countDownNumBig)
      .add(countDownNumSm);
      var scene = new ScrollMagic.Scene({
        triggerElement:'#countDown3',
      })
      .setTween(timeLine)
      .addTo(scrollMagicCtrl);
  },
  countdownTimer2: function(){
    var scrollMagicCtrl = new ScrollMagic.Controller();
    var timeLine = new TimelineMax({repeat: 10, repeatDelay: 2.5, yoyo:true});
    var countDownNumBig = TweenMax.to('#countNum2', 1, {
        scale: 1.5
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
      })
      .setTween(timeLine)
      .addTo(scrollMagicCtrl);
  },
  countdownTimer1: function(){
    var scrollMagicCtrl = new ScrollMagic.Controller();
    var timeLine = new TimelineMax();
    var countDownNumBig = TweenMax.to('#countNum1', 2.5, {
        scale: 1.3,
        color: '#d00a0a',
        delay: 2
    });
    var hideCountDownNumBig = TweenMax.to('.countdown-circle', 1,{
      opacity: 0,
      display: 'none'
    });
    var launchAppear = TweenMax.to('.launchButton', 0.5, {
      opacity: 1
    });
    var launchButton = TweenMax.fromTo('.launchButton', 1, {
      boxShadow: "0px 0px 5px 2px rgba(255, 0, 0, 0.3)"},
      {
        boxShadow: "0px 0px 30px 15px rgba(255,0,0,0.7)",
        repeat: -1,
        yoyo: true,
        ease: Linear.easeNone
        });
    timeLine
    .add(countDownNumBig)
    .add(hideCountDownNumBig)
    .add(launchAppear)
    .add(launchButton);
    var scene = new ScrollMagic.Scene({
      triggerElement:'.photo-break-4'
    })
    .setTween(timeLine)
    .addTo(scrollMagicCtrl);
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
  // scene.addIndicators({name:"Rocket Start"});

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
    // scene.addIndicators({name: "Picasso start"});
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
    // scene.addIndicators({name: "Clarke start"});
    //PIN QUOTE SCENE
    var scene2 = new ScrollMagic.Scene({
      triggerElement:'.photo-break-3',
      duration: 240,
      reverse:false
    })
    .setPin('#quote3', {pushFollowers:false})
    .addTo(scrollMagicCtrl);
  },


/////////////////////// END ANIMATIONS //////////////////////////////////
/////////////////////////////////////////////////////////////////////////


/////////////////////// MASONRY JAVSCRIPT ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
    // masonryLayout: function(){
    //   'instaFeed'
    // },


/////////////////////// INSTAFEED JAVSCRIPT////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
    instaFeedJS: function(){
      var token = '1727382786.0026c9a.e3dbd00f5e3b4488a16c0a4d1292a113';
      var token2 = 'dafda223e7004630a76c43af86349865';
      var feed = new Instafeed({
        get: 'tagged',
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        tagName: '39portmk',
        clientId: '0026c9a8b09149718be94f73e1778285',
        userId: 'krausemaxwell',
        accessToken: token,
        template: '<img src class="masonry-image" ="{{image}}" />',
        limit: 100
    });
    feed.run();
  },

/////////////////////// CLICK EVENTS BEGIN //////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

  clickEvtAboutView: function(){
    $('body').on('click', '#aboutLink', function(event){
      console.log("im clicked about");
      $('#landing').addClass('hidden');
      $('#work').addClass('hidden');
      $('#about').removeClass('hidden');
    });
  },

  clickEvtWorkView: function(){
    $('body').on('click', '#workLink', function(event){
      console.log("im clicked work");
      $('#landing').addClass('hidden');
      $('#about').addClass('hidden');
      $('#work').removeClass('hidden');
    });
  },

  clickEvtHomeView: function(){
    $('body').on('click', '#landingLink', function(event){
      console.log("im clicked");
      $('#work').addClass('hidden');
      $('#about').addClass('hidden');
      $('#landing').removeClass('hidden');
    });
  }


//OBJ LITERAL ENDING  DO NOT DELETE BELOW HERE

};
