const slides = document.querySelector(".carousel__track");
const allSlides = document.querySelectorAll(".carousel__slide");
const prev = document.querySelector(".carousel__button--left");
const next = document.querySelector(".carousel__button--right");

let slideWidth = allSlides[0].offsetWidth;

let index = 1;
let posX1;
let posX2;
let initialPosition = slides.offsetLeft;
let finalPosition;

let canISlide = true;

function checkPos(){
  checkWidth();
  let x = 0 - slideWidth * checkIndex();
  slides.style.left = `${x}px`;
}



next.addEventListener("click", () => switchSlide("next"))

prev.addEventListener("click", () => switchSlide("prev"));

slides.addEventListener("transitionend", checkIndex);

slides.addEventListener("mousedown", dragStart);
slides.addEventListener("touchstart", dragStart);
slides.addEventListener("touchmove", dragMove);
slides.addEventListener("touchend", dragEnd);
window.addEventListener("resize", checkPos);



//drag and move events start
function dragStart(e) {
  e.preventDefault();
  initialPosition = slides.offsetLeft;

  if (e.type == "touchstart") {
    posX1 = e.touches[0].clientX;
  } else {
    posX1 = e.clientX;
    document.onmousemove = dragMove;
    document.onmouseup = dragEnd;
    
  }
}

function dragMove(e) {
  if (e.type == "touchmove") {
    posX2 = posX1 - e.touches[0].clientX;
    posX1 = e.touches[0].clientX;
  } else {
    posX2 = posX1 - e.clientX;
    posX1 = e.clientX;
  }

  slides.style.left = `${slides.offsetLeft - posX2}px`;
  
}

function dragEnd() {
  console.log(finalPosition);
    slides.classList.add("transition");
  finalPosition = slides.offsetLeft;
if (finalPosition - initialPosition < -slideWidth/3) {
    switchSlide("next", "dragging");
  } else if (finalPosition - initialPosition > slideWidth/3) {
    switchSlide("prev", "dragging");
  } else {
    slides.style.left = `${initialPosition}px`;
  }
  
  document.onmouseup = null;
  document.onmousemove = null;
  
}
//drag and move events end
function checkWidth() {
  slideWidth = allSlides[0].offsetWidth;
}
// slide switcher
function switchSlide(arg, arg2) {
  slides.classList.add("transition");
  
  checkWidth();
  if (canISlide) {
    
    if (!arg2) {
      initialPosition = slides.offsetLeft;
    }
    if (arg == "next") {
      index++;
      slides.style.left = `${initialPosition - slideWidth}px`;
    } else {
      slides.style.left = `${initialPosition + slideWidth}px`;
      index--;
    }
  } 
  canISlide = false;
}

function checkIndex() {
  slides.classList.remove("transition");
  if (index == 0) {
    slides.style.left = `-${3 * slideWidth}px`;
    index = 3;
  }
  if (index == 4) {
    slides.style.left = `-${1 * slideWidth}px`;
    index = 1;
  }
  canISlide = true;
  return index;
}
checkPos();