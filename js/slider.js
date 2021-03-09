const images = document.querySelectorAll(".images img");
const slideshowContainer = document.querySelector(".slideshow_container");
const mainImage = document.querySelector("#mainImg");
const imageTxt = document.querySelector("#imgTxt");
const closeBtn = document.querySelector("#closebtn");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let imageIndex;

function openImg(index) {
	imageIndex = index;
	mainImage.src = images[imageIndex].src;
    imageTxt.innerHTML = images[imageIndex].alt;
}

for (let i = 0; i < images.length; i++) {
	let imageIndex = i;
	images[i].addEventListener("click", ()=> {
        openImg(imageIndex);

		slideshowContainer.classList.add("appear");
	})
}

closeBtn.addEventListener("click", ()=> {
    slideshowContainer.classList.remove("appear");
});

prevBtn.addEventListener("click", ()=> {
	if (imageIndex < 1) {
		imageIndex = images.length - 1;
	} else {
		imageIndex--;
	}

 	openImg(imageIndex);
});

nextBtn.addEventListener("click", ()=> {
    if (imageIndex >= images.length - 1) {
    	imageIndex = 0;
    } else {
    	imageIndex++;
    }

 	openImg(imageIndex);
});
