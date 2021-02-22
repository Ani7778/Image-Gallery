const images = document.querySelectorAll(".images img");
const slideshowContainer = document.querySelector(".slideshow_container");
const mainImage = document.querySelector("#mainImg");
const imageTxt = document.querySelector("#imgTxt");
const closeBtn = document.querySelector("#closebtn");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

images.forEach((image, index) => {
    image.addEventListener("click", ()=> {
    	mainImage.src = image.src;
    	imageTxt.innerHTML = image.alt;
        slideshowContainer.classList.add("appear");
    
        let imageIndex = index;
	    let next = imageIndex++;
	    let prev = imageIndex--;

        prevBtn.addEventListener("click", ()=> {
	    	if (prev < 0) {
	    		prev = images.length - 1;
	    	}

	    	mainImage.src = images[prev].src;
	    	imageTxt.innerHTML = images[prev].alt;
	    	prev--;
	    	next = prev + 2;
	    });
        
        nextBtn.addEventListener("click", ()=> {
            if (next >= images.length) {
            	next = 0;
            }

	    	mainImage.src = images[next].src;
	    	imageTxt.innerHTML = images[next].alt;
	    	next++;
	    	prev = next - 2;
	    });

	    closeBtn.addEventListener("click", ()=> {
	        slideshowContainer.classList.remove("appear");
	    });
	});
});
