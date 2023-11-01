let gamePattern = new Array();
let userClickedPattern = new Array();
let buttonColours = ["red", "blue", "green", "yellow"];
let level = 0;
let userCounter = 0;

//play sound when it is chosen or selected random
function playSound(name) {
  new Audio(
    "/Simon Game Challenge Starting Files/sounds/" + name + ".mp3"
  ).play();
}

//random number and animation when button is selected.
function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).animate({ opacity: 0.1 }, 100, function () {
    $(this).animate({ opacity: 1 }, 100);
  });
  // $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  if (level == 0) {
    $("#level-title").text("Level 1");
  }
  level++;
}

//when it is pressed, the button is animated.
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

//when button is chosen, the sound plays and save chosen button.
$(".btn").on("click", function () {
  console.log("CLICKED BUTTON");
  let userChosenColour = $(this).attr("id");
  animatePress(userChosenColour);
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  checkAnswer(level);
});

$(document).keydown(function (event) {
  if (level == 0) {
    nextSequence();
  }
});

function checkAnswer(currentLevel) {
  if (
    gamePattern[userCounter] === userClickedPattern[userCounter] &&
    gamePattern.length === userClickedPattern.length
  ) {
    setTimeout(function () {
      nextSequence();
    }, 1000);
    $("#level-title").text("Level " + currentLevel);
    userCounter = 0;
    userClickedPattern = [];
    return;
  }
  if (gamePattern[userCounter] === userClickedPattern[userCounter]) {
    userCounter++;
    return;
  }
  if (gamePattern[userCounter] != userClickedPattern[userCounter]) {
    $("#level-title").text("Game Over,Press any key to restart");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    new Audio("/Simon Game Challenge Starting Files/sounds/wrong.mp3").play();
    gamePattern = [];
    userClickedPattern = [];
    userCounter = 0;
    level = 0;
    $(document).keydown(function (event) {
      $("#level-title").text("Level 1");
      if (level == 0) {
        nextSequence();
      }
    });
  }
}
