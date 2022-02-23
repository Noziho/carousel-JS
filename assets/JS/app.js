let imgCarousel;
let indexCounter = 0;
let id = 0;
function Carousel([...image]) {

    /*
    function for draw div/img/button
     */
    this.draw = () => {
        id++;
        let principalDiv = document.createElement("div");
        principalDiv.id = "globalDiv" + id;
        principalDiv.className = "globalDiv";
        document.body.append(principalDiv);

        let divForImg = document.createElement("div");
        divForImg.id = "carousel" + id;
        divForImg.className = "carousel"
       principalDiv.append(divForImg);

        imgCarousel = document.createElement("img");
        imgCarousel.src = image[indexCounter];
        imgCarousel.id = "imgCarousel" + id;
        document.getElementById("carousel" + id).append(imgCarousel);

        let arrowLeft = document.createElement("i");
        arrowLeft.className = "fas fa-chevron-left";
        let backButton = document.createElement("div");
        backButton.id = "leftArrow"+ id;
        backButton.className = "leftArrow";
        backButton.addEventListener('click', () => {
            if (indexCounter > 0) {
                indexCounter--;
                imgCarousel.src = image[indexCounter];
            } else if (indexCounter === 0) {
                indexCounter += image.length - 1;
                imgCarousel.src = image[indexCounter];
            }

        })
        document.getElementById("carousel" + id).append(backButton);
        document.getElementById("leftArrow" + id).append(arrowLeft);

        let arrow = document.createElement("i");
        arrow.className = "fas fa-chevron-right";
        let skipButton = document.createElement("div");
        skipButton.id = "rightArrow" + id;
        skipButton.className = "rightArrow"
        skipButton.addEventListener('click', () => {
            if (indexCounter < image.length - 1) {
                indexCounter++;
                imgCarousel.src = image[indexCounter];
            } else if (indexCounter === image.length - 1) {
                indexCounter = 0;
                imgCarousel.src = image[indexCounter];
            }
        })
        document.getElementById("carousel" + id).append(skipButton);
        document.getElementById("rightArrow" + id).append(arrow);
    }

}

let monCarousel = new Carousel(["/assets/img/image1.jpg", "/assets/img/image2.jpg", "/assets/img/image3.jpg", "/assets/img/image4.jpg", "/assets/img/image5.jpg", "/assets/img/image6.jpg",]);
monCarousel.draw();
let monCarousel2 = new Carousel(["/assets/img/image0.jpg", "/assets/img/image2.jpg", "/assets/img/image3.jpg", "/assets/img/image4.jpg", "/assets/img/image5.jpg", "/assets/img/image6.jpg",]);
monCarousel2.draw();