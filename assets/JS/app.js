let imgCarousel;
let indexCounter = 0;

function Carousel([...image]) {

    /*
    function for create principal div container for all carousel and button
     */
    this.createElementDiv = () => {
        let principalDiv = document.createElement("div");
        principalDiv.id = "globalDiv";
        document.body.append(principalDiv);
    }

    /*
    function for create a div for contain img on principal div
     */
    this.createDivForImg = () => {
        let divForImg = document.createElement("div");
        divForImg.id = "carousel";
        document.getElementById("globalDiv").append(divForImg);
    }

    /*
    A function for create Img on the div for the images
     */
    this.createImg = () => {
        imgCarousel = document.createElement("img");
        imgCarousel.src = `/assets/img/${image[indexCounter]}.jpg `;
        imgCarousel.id = "imgCarousel";
        document.getElementById("carousel").append(imgCarousel);
    }

    /*
    Function for create a backbutton Div with arrow incon left, simple button for go the image before.
    If u need to change the format of image change the line 47/50, if u have img on different format change the format
    * for having the same for all images.
     */
    this.backButton = () => {
        let arrowLeft = document.createElement("i");
        arrowLeft.className = "fas fa-chevron-left";
        let backButton = document.createElement("div");
        backButton.id = "leftArrow";
        backButton.addEventListener('click', () => {
            if (indexCounter > 0) {
                indexCounter--;
                imgCarousel.src = `/assets/img/${image[indexCounter]}.jpg `;
            } else if (indexCounter === 0) {
                indexCounter += image.length - 1;
                imgCarousel.src = `/assets/img/${image[indexCounter]}.jpg `;
            }

        })
        document.getElementById("carousel").append(backButton);
        document.getElementById("leftArrow").append(arrowLeft);

    }

    /*
    * Function for create a skipButton with arrow right icon, simple skip image.
    * If u need to change format of ur img, just change line 74 and 77, if u have img on different format change the format
    * for having the same for all images.
    * */

    this.skipButton = () => {
        let arrow = document.createElement("i");
        arrow.className = "fas fa-chevron-right";
        let skipButton = document.createElement("div");
        skipButton.id = "rightArrow"
        skipButton.addEventListener('click', () => {
            if (indexCounter < image.length - 1) {
                indexCounter++;
                imgCarousel.src = `/assets/img/${image[indexCounter]}.jpg `;
            } else if (indexCounter === image.length - 1) {
                indexCounter = 0;
                imgCarousel.src = `/assets/img/${image[indexCounter]}.jpg `
            }
        })
        document.getElementById("carousel").append(skipButton);
        document.getElementById("rightArrow").append(arrow);
    }
}

let monCarousel = new Carousel(["image1", "image2", "image3", "image4", "image5", "image6",]);
monCarousel.createElementDiv();
monCarousel.createDivForImg();
monCarousel.createImg();
monCarousel.backButton()
monCarousel.skipButton();