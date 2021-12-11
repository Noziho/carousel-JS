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
