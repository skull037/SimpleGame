//sets gameover screen invisable
  document.getElementById("gameover").style.visibility = "hidden";
//player's location
var PlayerX = Number(document.getElementById("Player").getAttribute("x"));
var PlayerY = Number(document.getElementById("Player").getAttribute("y"));

//time at game start
var timeStart = Date.now()
//food eaten which is the score and the score element and hunger and its element
var FoodEaten = 0
var ScoreText = document.getElementById("score");
var Hunger = 100;
var HungerText = document.getElementById("hunger");
//apple speeds
var apple1Speed = 2;
var apple2Speed = 2;
//checks if the game is active
var Gamebool = true;
document.addEventListener("keydown", function(e) {
  if(Gamebool == true){
  var apple1X=Number(document.getElementById("apple1").getAttribute("x"));
  var apple1y=Number(document.getElementById("apple1").getAttribute("y"));
  var apple2X=Number(document.getElementById("apple2").getAttribute("x"));
  var apple2y=Number(document.getElementById("apple2").getAttribute("y"));
  if(e.keyCode == 37 || e.keyCode == 65){
    PlayerX -=10;
 document.getElementById("Player").setAttribute("x", PlayerX)
 Hunger--
  }
  else if(e.keyCode == 39|| e.keyCode == 68){
    PlayerX +=10;
 document.getElementById("Player").setAttribute("x", PlayerX)
 Hunger--

  }
  if(e.keyCode == 40 || e.keyCode == 83){
    PlayerY +=10;
 document.getElementById("Player").setAttribute("y", PlayerY)
  Hunger--

  }
  else if(e.keyCode == 38|| e.keyCode == 87){
    PlayerY -=10;
 document.getElementById("Player").setAttribute("y", PlayerY)
  Hunger--
  }
    HungerText.textContent = "HUNGER:" + Hunger;
//checks players location against apple's location
  if(PlayerX >= apple1X-15 && PlayerX <= apple1X+15 && PlayerY >= apple1y-15 && PlayerY <= apple1y+15 ){
    apple1Speed *= 0.9;
    document.getElementById("apple1").setAttribute("x",NumGen(75, 390));
    document.getElementById("apple1Ani").setAttribute("dur",apple1Speed);
EatApple();
  }
  else if(PlayerX >= apple2X-15 && PlayerX <= apple2X+15 && PlayerY >= apple2y-15 && PlayerY <= apple2y+15 ){
    apple2Speed *= 0.9;
    document.getElementById("apple2").setAttribute("x",NumGen(75, 390));
        document.getElementById("apple2Ani").setAttribute("dur",apple2Speed);
  EatApple();
  }
  if(Hunger <= 0){
    var timeStop = Date.now()
      SurTime.textContent = "YOU SURVIVED FOR "+ Math.round((timeStop - timeStart)/360) +" SECONDS" ;
  document.getElementById("game").style.visibility = "hidden";
    document.getElementById("gameover").style.visibility = "visible";
      gameoverscore.textContent = "FINAL SCORE: " + (FoodEaten + Math.round(((timeStop - timeStart)/360)/2));
      Gamebool = false;
  }
}
});
//random number generator
function NumGen(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function EatApple(){
  FoodEaten++
  score.textContent = "SCORE:" + FoodEaten;
  Hunger += 10;
  if(Hunger > 100){
    Hunger = 100
  }
}
