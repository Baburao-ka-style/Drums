
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Detecting button press

for (i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)

    function handleClick() {
        let buttonInnerHtml = this.innerHTML
        makeSound(buttonInnerHtml)
        buttonAnimation(buttonInnerHtml)
    }
}

// Detecting keyboard press

document.addEventListener("keydown", function (event) {
    makeSound(event.key)
    buttonAnimation(event.key)
})


function makeSound(key) {
    switch (key) {
        case "w":
            let crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
        case "a":
            let kick_bass = new Audio("sounds/kick-bass.mp3")
            kick_bass.play();
            break;
        case "s":
            let snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;
        case "d":
            let tom_1 = new Audio("sounds/tom-1.mp3")
            tom_1.play();
            break;
        case "j":
            let tom_2 = new Audio("sounds/tom-2.mp3")
            tom_2.play();
            break;
        case "k":
            let tom_3 = new Audio("sounds/tom-3.mp3")
            tom_3.play();
            break;
        case "l":
            let tom_4 = new Audio("sounds/tom-4.mp3")
            tom_4.play();
            break;

        default: console.log(buttonInnerHtml)
            break;
    }
}


function buttonAnimation(currentKey) {

    let activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed")

    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 100);
}