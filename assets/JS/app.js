let imgCarousel;
let indexCounter = 0;

function Carousel([...image]) {

    /*
    function for draw div/img/button
     */
    this.draw = () => {
        let principalDiv = document.createElement("div");
        principalDiv.id = "globalDiv";
        document.body.append(principalDiv);

        let divForImg = document.createElement("div");
        divForImg.id = "carousel";
        document.getElementById("globalDiv").append(divForImg);

        imgCarousel = document.createElement("img");
        imgCarousel.src = image[indexCounter];
        imgCarousel.id = "imgCarousel";
        document.getElementById("carousel").append(imgCarousel);

        let arrowLeft = document.createElement("i");
        arrowLeft.className = "fas fa-chevron-left";
        let backButton = document.createElement("div");
        backButton.id = "leftArrow";
        backButton.addEventListener('click', () => {
            if (indexCounter > 0) {
                indexCounter--;
                imgCarousel.src = image[indexCounter];
            } else if (indexCounter === 0) {
                indexCounter += image.length - 1;
                imgCarousel.src = image[indexCounter];
            }

        })
        document.getElementById("carousel").append(backButton);
        document.getElementById("leftArrow").append(arrowLeft);

        let arrow = document.createElement("i");
        arrow.className = "fas fa-chevron-right";
        let skipButton = document.createElement("div");
        skipButton.id = "rightArrow"
        skipButton.addEventListener('click', () => {
            if (indexCounter < image.length - 1) {
                indexCounter++;
                imgCarousel.src = image[indexCounter];
            } else if (indexCounter === image.length - 1) {
                indexCounter = 0;
                imgCarousel.src = image[indexCounter];
            }
        })
        document.getElementById("carousel").append(skipButton);
        document.getElementById("rightArrow").append(arrow);
    }

}

let monCarousel = new Carousel(["/assets/img/image1.jpg", "/assets/img/image2.jpg", "/assets/img/image3.jpg", "/assets/img/image4.jpg", "/assets/img/image5.jpg", "/assets/img/image6.jpg",]);
monCarousel.draw();