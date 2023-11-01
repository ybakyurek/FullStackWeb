var buttons = document.querySelectorAll(".drum"); //sadece .drum'da diyebilirdik

let crash = new Audio("/Drum Kit Starting Files/sounds/crash.mp3");
let kickBass = new Audio("/Drum Kit Starting Files/sounds/kick-bass.mp3");
let snare = new Audio("/Drum Kit Starting Files/sounds/snare.mp3");
let tom1 = new Audio("/Drum Kit Starting Files/sounds/tom-1.mp3");
let tom2 = new Audio("/Drum Kit Starting Files/sounds/tom-2.mp3");
let tom3 = new Audio("/Drum Kit Starting Files/sounds/tom-3.mp3");
let tom4 = new Audio("/Drum Kit Starting Files/sounds/tom-4.mp3");

function playSound(key) {
  switch (key) {
    case "w":
      crash.play();
      break;
    case "a":
      kickBass.play();
      break;
    case "s":
      snare.play();
      break;
    case "d":
      tom1.play();
      break;
    case "j":
      tom2.play();
      break;
    case "k":
      tom3.play();
      break;
    case "l":
      tom4.play();
      break;
    default:
      console.log(key);
      break;
  }
}

buttons.forEach((element) => {
  element.addEventListener("click", function () {
    playSound(element.textContent);
    changeColor(element.textContent);
  });
  

});

document.addEventListener("keydown", function (event) {
  playSound(event.key.toLowerCase());
  changeColor(event.key);
});

function changeColor(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
