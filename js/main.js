// Global Variables
var frame = document.getElementsByClassName("frame")
var container = document.getElementsByClassName("container")
var heroImage = document.getElementById("hero-image")
var menu = document.getElementById("menu")
var exit = document.getElementById("exit");
var group1 = document.getElementsByClassName("group1")
var day = document.getElementById("day");
var credit = document.getElementById("credit")
var shades = document.getElementById("options")
var option1 = document.getElementById("option1")
var option2 = document.getElementById("option2")
var option3 = document.getElementById("option3")

// Global Timelines
var introTL = new TimelineMax()
var optionsTL = new TimelineMax({})
var enterTL = new TimelineMax()

// Exiting the options screen reverses the animation timeline of optionsTL and re-adds the eventListeners
function exitMenu(){
  optionsTL.reverse()
  addEventListeners()
}
// Removes mouse over and leave event listeners after menu button is clicked
function removeEventListener(){
	menu.removeEventListener('mouseleave', leaveAnimation, false)
	menu.removeEventListener('mouseenter', enterAnimation, false)
}

// Animation reveals options after menu is clicked and also calls the removeEventListener function to remove event listeners
function showOptions(){
  removeEventListener()
	optionsTL.play()
		 optionsTL
			.to(menu, .7, {x: 130, ease: Power2.easeInOut}, "sync")
			.to(group1, .7, {y: 15, ease: Power2.easeInOut}, "sync")
			.to(day, 0.8, { y: -20, ease: Power2.easeInOut}, "sync")
			.to(heroImage, .7, {x: 20, y: 30, scale: 1.2, ease: Power2.easeInOut}, "sync")
			.to(exit, 0.7, {rotation: 180, ease: Power2.easeInOut, transformOrigin: "center center", delay: .2}, "sync")
			.staggerTo([option1, option2, option3], .75, {x: 0, ease: Power2.easeInOut}, .1, "sync+=.1")
}

// Mouse enter animation when hovering over menu
function enterAnimation(){
	TweenMax.to(menu, 0.3, { ease: Power2.easeOut, x: -30 });
}
// Mouse leave animation when not hovering over the menu
function leaveAnimation(){
	TweenMax.to(menu, 0.3, { ease: Power2.easeOut, x: 0 });
}

// Adds event listeners after introAnimation completes
function addEventListeners(){
   menu.addEventListener("mouseenter", enterAnimation, false) 
   menu.addEventListener('mouseleave', leaveAnimation, false)
   menu.addEventListener("click", showOptions)
   exit.addEventListener("click", exitMenu)
}
// Animates the intro portion of the microsite and on completion calls the addEventListeners function to add event listeners to the page
function introAnimation(){
    introTL
      .fromTo(heroImage, {opacity: 0, x: 20, y: -10, scale: 1.4}, {duration: 1, x: 0, y: 0, ease: Power4.easeInOut, opacity:1, scale: 1.3})
      .to(day, .9, {ease: Power4.easeInOut, y: 0}, "sync-=.9")
      .to(group1, .9, {y: -15, ease: Power4.easeInOut}, "sync-=.9")
      .to(menu, .9, {x: 0, ease: Power4.easeInOut}, "sync-=.9")
      .fromTo(credit, .9, {opacity: 0, x: 10}, {opacity: 1, x: 0, ease: Power4.easeInOut, onComplete: addEventListeners}, "sync-=.8")
}

// This is a pre load screen to make sure there is a smooth transition into the intro animation
function fadeIn(){
   gsap.to([frame, container], .5, {opacity: 1})
   gsap.delayedCall(.2, introAnimation)
}

// When init is called, all elements are set in position before the intro animation plays
function init(){
   var tl = new TimelineMax()
   tl
      .set([frame, container, ".group1 p", ".group1 svg", menu, "#menu p"], {opacity: 1})
      .set(day, {y: 55, opacity: 1})
      .set([heroImage, menu, credit, group1], {rotation: 0.01, force3D: false})
      .set([frame, container], {xPercent: -50, yPercent: -50})
      .set(heroImage, {scale: 1.3})
      .set([".group1"], {y: -90, opacity: 1})
      .set(menu, {x: 100, force3D: false})
      .set(".group1 p", { force3D: false})
      .set([".group1 p", ".group1 svg"], {opacity: 1})
      .set([option1, option2, option3], {x: -300, onComplete: fadeIn})
}