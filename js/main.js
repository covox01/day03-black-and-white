var frame = document.getElementsByClassName("frame")
var container = document.getElementsByClassName("container")
var heroImage = document.getElementById("hero-image")
var menu = document.getElementById("menu")
var exit = document.getElementById("exit");
var group1 = document.getElementsByClassName("group1")
//Copy
var day = document.getElementById("day");
var credit = document.getElementById("credit")

var shades = document.getElementById("options")
var option1 = document.getElementById("option1")
var option2 = document.getElementById("option2")
var option3 = document.getElementById("option3")

// Timeline
var tl = new TimelineMax()
var optionsTL = new TimelineMax({})

function exitMenu(){
   TweenMax.to(exit, .5, {rotation: 0, ease: Power2.easeInOut})
   TweenMax.to(group1, .7, {y: -15, ease: Power2.easeInOut})
   TweenMax.to(day, .8, {y: 0, ease: Power2.easeInOut})
   TweenMax.to(menu, 0.7, { x: 0, ease: Power2.easeInOut });
   TweenMax.to(heroImage, .7, {x: 0, y: 0, scale: 1.3, ease: Power2.easeInOut})
   TweenMax.staggerTo([option3, option2, option1], .7, {x: -300, ease: Power2.easeInOut}, .1)
   addEventListeners()
}

function removeEventListener(){
   menu.removeEventListener('mouseleave', leaveAnimation, false)
   menu.removeEventListener('mouseover', enterAnimation, false)
}

function showOptions(){
   removeEventListener()
   TweenMax.to(menu, .7, {x: 130, ease: Power2.easeInOut})
   TweenMax.to(group1, .7, {y: 15, ease: Power2.easeInOut})
   TweenMax.to(day, 0.8, { y: -20, ease: Power2.easeInOut});
   TweenMax.to(heroImage, .7, {x: 20, y: 30, scale: 1.2, ease: Power2.easeInOut})
   
   TweenMax.to(exit, 0.5, {rotation: 180, ease: Power2.easeInOut, transformOrigin: "center center", delay: .2});
   TweenMax.staggerTo([option1, option2, option3], .75, {x: 0, ease: Power2.easeInOut}, .1)
   // optionsTL.play()
   // optionsTL
   //    .to(option1, .75, {x: 0, ease: Power2.easeInOut })
   //    .to(option2, .75, {x: 0, ease: Power2.easeInOut }, "-=.6")
   //    .to(option3, .75, {x: 0, ease: Power2.easeInOut}, "-=.7")
}

function enterAnimation(){
   gsap.to(menu, .3, {ease: Power2.easeInOut, x: -30})
}

function leaveAnimation(){
   gsap.to(menu, 0.3, { ease: Power2.easeInOut, x: 0 });
}

function addEventListeners(){
   menu.addEventListener("mouseover", enterAnimation, false)
   
   menu.addEventListener('mouseleave', leaveAnimation, false)
    
   menu.addEventListener("click", showOptions)

   option1.addEventListener

   exit.addEventListener("click", exitMenu)
}

function animate(){
    tl
      .fromTo(heroImage, {opacity: 0, x: 20, y: -10, scale: 1.4}, {duration: 1, x: 0, y: 0, ease: Power4.easeInOut, opacity:1, scale: 1.3})
      .to(day, .9, {ease: Power4.easeInOut, y: 0}, "sync-=.9")
      .to(group1, .9, {y: -15, ease: Power4.easeInOut}, "sync-=.9")
      .to(menu, .9, {x: 0, ease: Power4.easeInOut}, "sync-=.9")
      .fromTo(credit, .9, {opacity: 0, x: 10}, {opacity: 1, x: 0, ease: Power4.easeInOut, onComplete: addEventListeners}, "sync-=.8")
}

function fadeIn(){
   gsap.to([frame, container], .5, {opacity: 1})

   gsap.delayedCall(.4, animate)
}

function init(){

   var tl = new TimelineMax()
   tl
      .set([frame, container, ".group1 p", ".group1 svg", menu, "#menu p"], {opacity: 1})
      .set(day, {y: 55, opacity: 1})
      .set([heroImage, menu, credit, group1], {rotation: 0.01, force3D: false})
      .set([frame, container], {xPercent: -50, yPercent: -50})
      .set(heroImage, {scale: 1.3})
      .set([".group1"], {y: -90, opacity: 1})
      .set(menu, {x: 100})
      .set(".group1 p", { force3D: false})
      .set([".group1 p", ".group1 svg"], {opacity: 1})
      .set([option1, option2, option3], {x: -300, onComplete: fadeIn})
}