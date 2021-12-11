let imgCarousel;
function Carousel([...image]) {

    this.image = [...image];
    console.log(image);

    this.createElementDiv = () => {
        let principalDiv = document.createElement("div");
        principalDiv.id = "globalDiv";
        document.body.append(principalDiv);
    }

    this.createDivForImg = () => {
        let divForImg = document.createElement("div");
        divForImg.id = "carousel";
        document.getElementById("globalDiv").append(divForImg);
    }
    this.createImg = () => {
        imgCarousel = document.createElement("img");
        imgCarousel.src = `/assets/img/${image[0]}.jpg `;
        imgCarousel.id = "imgCarousel";
        document.getElementById("carousel").append(imgCarousel);
    }

    this.backButton = () => {
        let backButton = document.createElement("button")
        backButton.innerHTML = "Back";
        backButton.addEventListener('click', () => {
            imgCarousel.src = `/assets/img/${image[1]}.jpg `;
        })
        document.getElementById("globalDiv").append(backButton);

    }

    this.skipButton = () => {
        let skipButton = document.createElement("button");
        skipButton.innerHTML = "Skip";
        skipButton.addEventListener('click', () => {
            imgCarousel.src = `/assets/img/${image[2]}.jpg `
        })
        document.getElementById("globalDiv").append(skipButton);
    }
}

let monCarousel = new Carousel(["image1", "image2", "image3", "image4", "image5"]);
monCarousel.createElementDiv();
monCarousel.backButton()
monCarousel.createDivForImg();
monCarousel.skipButton();
monCarousel.createImg();

console.log(monCarousel);


/**
 let image = [
 "image"
 ];

 let myImages = document.getElementById("imageCarousel");

 let counter = 1;
 document.getElementById("skip").addEventListener('click', () => {
    if (counter <=4) {
        counter++;
        myImages.src = "/assets/img/" + image[0] + counter + ".jpg";
        console.log(counter)
    }

    else {
        counter = 0;
    }

})

 document.getElementById("back").addEventListener('click', () => {
    if (counter > 1) {
        counter--;
        console.log(counter);
        myImages.src = "/assets/img/" + image[0] + counter + ".jpg";
    }

    else {
        counter = 6;
    }
})
 **/
