const mainImg = document.querySelector("#mainImg");

const thumb1 = document.querySelector("#thumb1");
const thumb1Src = document.querySelector("#thumb1").src;
const thumb2 = document.querySelector("#thumb2");
const thumb2Src = document.querySelector("#thumb2").src;
const thumb3 = document.querySelector("#thumb3");
const thumb3Src = document.querySelector("#thumb3").src;
const thumb4 = document.querySelector("#thumb4");
const thumb4Src = document.querySelector("#thumb4").src;
const thumb5 = document.querySelector("#thumb5");
const thumb5Src = document.querySelector("#thumb5").src;
const thumb6 = document.querySelector("#thumb6");
const thumb6Src = document.querySelector("#thumb6").src;


thumb1.addEventListener("click", ()=> {
	mainImg.src = thumb1Src;
});

thumb2.addEventListener("click", ()=> {
	mainImg.src = thumb2Src;
});

thumb3.addEventListener("click", ()=> {
	mainImg.src = thumb3Src;
});

thumb4.addEventListener("click", ()=> {
	mainImg.src = thumb4Src;
});

thumb5.addEventListener("click", ()=> {
	mainImg.src = thumb5Src;
});

thumb6.addEventListener("click", ()=> {
	mainImg.src = thumb6Src;
});

const closeBtn = document.querySelector("#closebtn");
const updateBtn = document.querySelector("#updateBtn");
const slideContainer = document.querySelector(".slide_container");

closeBtn.addEventListener("click", ()=> {
	slideContainer.style.display = "none";
});

updateBtn.addEventListener("click", ()=> {
	slideContainer.style.display = "block";
});


const slide = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = images[0].clientWidth;

slide.style.transform = "translateX(" + (-size * counter) + "px)";    

nextBtn.addEventListener("click", ()=> {
	if(counter >= images.length - 1) return;
	slide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slide.style.transform = "translateX(" + (-size * counter) + "px)";
});

prevBtn.addEventListener("click", ()=> {
	if(counter <= 0) return;
	slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slide.style.transform = "translateX(" + (-size * counter) + "px)";
});

slide.addEventListener("transitionend", ()=> {
    if(images[counter].id === "lastImage") {
    	slide.style.transition = "none";
    	counter = images.length - 2;
    	slide.style.transform = "translateX(" + (-size * counter) + "px)";
    }

    if(images[counter].id === "firstImage") {
    	slide.style.transition = "none";
    	counter = images.length - counter;
    	slide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
});





