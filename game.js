// Initializare variabile
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var gameStarted = false;
userClickedPattern = [];
var gamePattern = [];

//Inceperea jocului
$(document).on("keydown", function()
{
    if(gameStarted  === false)
    {
    $("#level-title").text("Level " + level);
    nextSequence();
    gameStarted = true;
    
    }
});

//Prezentarea secventei la ultilizator
function nextSequence()
{
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(level);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
    level ++;
    $("#level-title").text("Level " + level)
}

//Animatii si sunete atunci cand apasam un buton
$(".btn").click(function()
{
    var userChosenColour = this.id;
    var audio = new Audio("sounds/" + userChosenColour + ".mp3");
    audio.play();
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length -1)
});

//Efecte animatie pt click
function animatePress(currentColur)
{
    $("#" + currentColur  ).addClass("pressed");
    setTimeout(function() {
        $(".btn").removeClass("pressed");
    }, 100);

}

//verificarea raspunsului
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      console.log("success");
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      console.log("wrong");
      var wrongAudio = new Audio("sounds/wrong.mp3")
      wrongAudio.play();
      $("body").addClass("game-over");
      setTimeout(function()
      {
        $("body").removeClass("game-over");
      }, 200);
      $("h1").text("Game over, Press Any Key to Restart");
      startOver();
    }

}

//Reincepe jocul
function startOver()
{
    level = 0;
    gamePattern = [];
    
}