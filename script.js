let counter = 0;
var sliders = document.querySelectorAll(".slider1");

function positionSlider(){
  sliders.forEach((slide, index) => {
    slide.style.left = `${index * slide.offsetWidth + 20 * index}px`;
  });
}


// slider.array.forEach(element => {
//         console.log(element)
// });

function handleNextSlide() {
  if (counter >= 8) {
    counter = 0;
  } else {
    counter++;
  }
  updateSlide();
}

// (sliders.length/2)

function handlePrevSlide() {
  if (counter <= 0) {
    // counter = Math.ceil((sliders.length/2) +1)
    counter = 8;
  } else {
    counter--;
  }
  updateSlide();
}

function updateSlide() {
  sliders.forEach((slide) => {
    slide.style.transform = `translateX(-${
      counter * (20 + slide.offsetWidth)
    }px)`;
  });
}


// setInterval(()=>{
//   handleNextSlide();
// },4000)




let counter1 = 0;
var sliders1 = document.querySelectorAll(".slider2");



function positionSlider1(){
  sliders1.forEach((slide1, index) => {
    slide1.style.left = `${index * slide1.offsetWidth + 20 * index}px`;
  });
}


// slider.array.forEach(element => {
//         console.log(element)
// });

function handleNextSlide1() {
  if (counter1 >= 8) {
    counter1 = 0;
  } else {
    counter1++;
  }
  updateSlide1();
}

// (sliders.length/2)

function handlePrevSlide1() {
  if (counter1 <= 0) {
    // counter = Math.ceil((sliders.length/2) +1)
    counter1 = 8;
  } else {
    counter1--;
  }
  updateSlide1();
}

function updateSlide1() {
  sliders1.forEach((slide1) => {
    slide1.style.transform = `translateX(-${
      counter1 * (20 + slide1.offsetWidth)
    }px)`;
  });
}


// setInterval(()=>{
//   handleNextSlide1();
// },4000)





























let counter2 = 0;
var sliders2 = document.querySelectorAll(".slider3");




function positionSlider2(){
  sliders2.forEach((slide2, index) => {
    slide2.style.left = `${index * slide2.offsetWidth + 20 * index}px`;
  });
}


// slider.array.forEach(element => {
//         console.log(element)
// });

function handleNextSlide2() {
  if (counter2 >= 8) {
    counter2 = 0;
  } else {
    counter2++;
  }
  updateSlide2();
}

// (sliders.length/2)

function handlePrevSlide2() {
  if (counter2 <= 0) {
    // counter = Math.ceil((sliders.length/2) +1)
    counter2 = 8;
  } else {
    counter2--;
  }
  updateSlide2();
}

function updateSlide2() {
  sliders2.forEach((slide2) => {
    slide2.style.transform = `translateX(-${
      counter2 * (20 + slide2.offsetWidth)
    }px)`;
  });
}


// setInterval(()=>{
//   handleNextSlide1();
// },4000)


function positionSliders(){
  positionSlider();
  positionSlider1();
  positionSlider2();
 
}

addEventListener("resize",()=>{
  positionSliders();
})


addEventListener("wheel",()=>{
  // document.querySelector("html").style.opacity=0;
  
})