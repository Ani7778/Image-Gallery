const mainImage = document.querySelector("#mainImg");
const thumbContainer = document.querySelector("#thumb_img_list");
const slideContainer = document.querySelector(".slide_container");
const slideshowContainer = document.querySelector(".slideshow_container");
const closeButtonContainer = document.querySelector(".close_btn_container");

thumbContainer.addEventListener("click", (event)=> {
	let targetElement = event.target;

	if (targetElement.tagName === "IMG") {
		mainImage.src = targetElement.getAttribute("src");
	}
    
    slideshowContainer.style.display = "block";
    slideContainer.style.display = "block";
    closeButtonContainer.style.display = "block";
});


const closeBtn = document.querySelector("#closebtn");

closeBtn.addEventListener("click", ()=> {
	slideContainer.style.display = "none";
	slideshowContainer.style.display = "none";
});


const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const images = document.querySelectorAll(".slides img");

let i = images.length;

nextBtn.addEventListener("click", ()=> {
	if (i < images.length) {
		i++;
	} else {
		i = 1;
	}

	mainImage.src = images[i - 1].src;
});


prevBtn.addEventListener("click", ()=> {
	if (i < images.length + 1 && i > 1) {
		i--;
	} else {
		i = images.length;
	}

	mainImage.src = images[i - 1].src;
});
