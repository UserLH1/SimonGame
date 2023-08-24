var buttonColours = ["red", "blue", "green", "yellow"];
userClickedPattern = [];
var gamePattern = [];
function nextSequence()
{
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}
$(".btn").click(function()
{
    var userChosenColour = this.id;
    var audio = new Audio("sounds/" + userChosenColour + ".mp3");
    audio.play();
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
});
