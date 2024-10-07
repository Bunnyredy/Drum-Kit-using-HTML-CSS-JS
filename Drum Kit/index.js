//detecting button press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttoninn = this.innerHTML;

        makesound(buttoninn);
        buttonanimation(buttoninn)
    })

}

//detecting keyboard press

document.addEventListener("keypress", function(e){
    makesound(e.key);
    buttonanimation(e.key)
})

function makesound(key){
    switch (key) {
        case "w":
            var audio = new Audio("tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("snare.mp3");
            audio.play();
            break;
        default: console.log(buttoninn);
    }
}

function buttonanimation(currentbutt){
document.querySelector("." + currentbutt).classList.add("pressed");
setTimeout(function() {
    document.querySelector("." + currentbutt).classList.remove("pressed");
}, 150);
}
