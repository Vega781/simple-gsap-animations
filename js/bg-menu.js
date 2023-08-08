let btnBurger = document.querySelector(".burger");
let btnClose = document.querySelector(".close");

let buttonTimeline = new TimelineMax ({paused: true});

buttonTimeline.to(".menu", {display: 'block', opacity: 1, duration: 0.2, width: "100%"});
buttonTimeline.from('.menu__top', {opacity: 0, y: -30, duration: 0.4});
buttonTimeline.from('.nav__list', {opacity: 0, y: 50, duration: 0.5});
buttonTimeline.from('.social', {opacity: 0, y: 50, duration: 0.4});
buttonTimeline.from('.menu__right', {opacity: 0, y: 50, duration: 0.4}, "-=0.4");

btnBurger.addEventListener('click', function() {
  buttonTimeline.play();
});

btnClose.addEventListener('click', function() {
  reverseT1(buttonTimeline);
});

function reverseT1(animation){
  animation.reversed() ? animation.play() : animation.reverse();
};
