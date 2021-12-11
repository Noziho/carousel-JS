function Carousel () {

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
        let imgCarousel = document.createElement("img");
        imgCarousel.src = "/assets/img/image1.jpg";
        document.getElementById("carousel").append(imgCarousel);
    }

    this.backButton = () => {
            let backButton = document.createElement("button")
            backButton.innerHTML = "Back";
            document.getElementById("globalDiv").append(backButton);

    }

    this.skipButton = () => {
        let skipButton = document.createElement("button");
        skipButton.innerHTML = "Skip";
        document.getElementById("globalDiv").append(skipButton);
    }
}

let monCarousel = new Carousel();
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
