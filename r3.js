
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function setWindowSize() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
};
window.addEventListener('resize', setWindowSize);

var eyes = document.querySelectorAll(".eyes");
var cursorPos = { x: 0, y: 0 };

window.addEventListener("mousemove", mousemove);
window.addEventListener("touchmove", touchmove);

function mousemove(e) {
  cursorPos = {
    x: e.clientX,
    y: e.clientY };

  if (!clicked) {
    eyes.forEach(function (el) {
      eyeFollow.init(el);
    });
  }
}
function touchmove(e) {
  cursorPos = {
    x: e.targetTouches[0].offsetX,
    y: e.targetTouches[0].offsetY };

  if (!clicked) {
    eyes.forEach(function (el) {
      eyeFollow.init(el);
    });
  }
}

var eyeFollow = function () {

  function getOffset(el) {
    el = el.getBoundingClientRect();
    return {
      x: el.left + window.scrollX,
      y: el.top + window.scrollY };

  }

  function moveEye(eye) {
    var eyeOffset = getOffset(eye);
    var bBox = eye.getBBox();
    var centerX = eyeOffset.x + bBox.width / 2;
    var centerY = eyeOffset.y + bBox.height / 2;
    var percentTop = Math.round((cursorPos.y - centerY) * 100 / windowHeight);
    var percentLeft = Math.round((cursorPos.x - centerX) * 100 / windowWidth);
    eye.style.transform = `translate(${percentLeft / 5}px, ${percentTop / 5}px)`;
  }

  return {
    init: el => {
      moveEye(el);
    } };

}();



var clicked, cancelled;
var animate = function () {

  var select = function (el) {
    return document.getElementById(el);
  };
  var svg = select("svg"),
  blob1 = select("blob-1"),
  blob3 = select("blob-3"),
  envelope = select("envelope"),
  eyeGroup = select("eye-group"),
  paper = select("paper-group"),
  mouth = select("mouth"),
  mouthHappy = select("mouth-happy"),
  mouthScared = select("mouth-scared"),
  mouthSad = select("mouth-sad"),
  eyeLaughingLeft = select("eye-laughing-left"),
  eyeLaughingRight = select("eye-laughing-right"),
  eyebrowHappyLeft = select("eyebrow-happy-left"),
  eyebrowHappyRight = select("eyebrow-happy-right"),
  eyebrowSadLeft = select("eyebrow-sad-left"),
  eyebrowSadRight = select("eyebrow-sad-right"),
  mouthWorry = select("mouth-worry"),
  mouthWorry1 = select("mouth-worry1"),
  openMouth = select("open-mouth"),
  tongue = select("tongue"),
  unsubscribeButton = select("unsubscribe"),
  cancelButton = select("cancel");

//  var confettis = document.querySelectorAll('#confetti > *');

  var title = document.querySelector('.title'),
  subtitle = document.querySelector('.subtitle');

//  var masterTl = new TimelineMax();

  unsubscribeButton.addEventListener("mouseover", willUnsubscribe);
  cancelButton.addEventListener("mouseover", willCancel);
    unsubscribeButton.addEventListener("mouseout", initFace);
  cancelButton.addEventListener("mouseout", initFace1);

  function willUnsubscribe() {
//    masterTl.add(doShake.play());
    
      var speed = 0.2;
       var speed2 = 0.001;
      TweenMax.to(mouthWorry, speed,{ y: 20 });
    TweenMax.to(paper, speed, { y: -20 });
    TweenMax.to(mouth, speed, { y: 15 });
    TweenMax.to(eyebrowSadLeft, speed, { y: -10 });
    TweenMax.to(eyebrowSadRight, speed, { y: -10 });
      TweenMax.to(mouthWorry1, speed2,{ y: 100 });
      
  };

  function willCancel() {
    var speed = 0.2;
      var speed2 = 0.001;
      TweenMax.to(mouthWorry, speed2,{ y: 100 });
    TweenMax.to(mouthWorry1, speed2,{ y: 0 });
    TweenMax.to(paper, speed, { y: 35 });
    TweenMax.to(eyeGroup, speed, { y: 5 });
    TweenMax.to(mouth, speed, { y: 5 });
    TweenMax.to(eyebrowSadLeft, speed, { y: 5 });
    TweenMax.to(eyebrowSadRight, speed, { y: 5 });
  };
    
    function initFace() {
    var speed = 0.2;
       var speed2 = 0.001;
      TweenMax.to(mouthWorry, speed2,{ y: 0 });
        
    TweenMax.to(paper, speed, { y: 0 });
    TweenMax.to(mouth, speed, { y: 10 });
    TweenMax.to(eyebrowSadLeft, speed, { y: 0 });
    TweenMax.to(eyebrowSadRight, speed, { y: 0 });
      TweenMax.to(mouthWorry1, speed2,{ y: 100 });
  };
    
    function initFace1() {
    var speed = 0.2;
       var speed2 = 0.001;
      TweenMax.to(mouthWorry, speed2,{ y: 100 });
    TweenMax.to(mouthWorry1, speed2,{ y: 0 });
    TweenMax.to(paper, speed, { y: 10 });
    TweenMax.to(eyeGroup, speed, { y: 5 });
    TweenMax.to(mouth, speed, { y: 5 });
    TweenMax.to(eyebrowSadLeft, speed, { y: 5 });
    TweenMax.to(eyebrowSadRight, speed, { y: 5 });
  };

function initAnimations() {
    clicked = false;
    initFace();
    animateBlob();
  }

  return {
    init: () => {
      initAnimations();
    } };

}();

document.addEventListener("DOMContentLoaded", animate.init());


function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return Math.random() * (max - min) + min;
}