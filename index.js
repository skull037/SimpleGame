//sets gameover screen invisable
  document.getElementById("gameover").style.visibility = "hidden";
//player's location
var PlayerX = Number(document.getElementById("Player").getAttribute("x"));
var PlayerY = Number(document.getElementById("Player").getAttribute("y"));
//time at game start
var timeStart = Date.now()
//food eaten which is the score and the score element and Health and its element
var FoodEaten = 0
var ScoreText = document.getElementById("score");
var Health = 100;
var HealthText = document.getElementById("Health");
//apple speeds
var apple1Speed = 2;
var apple2Speed = 2;
//checks if the game is active
var Gamebool = true;
document.addEventListener("keydown", function(e) {
  if(Gamebool == true){
    //apple's location
  var apple1X=Number(document.getElementById("apple1").getAttribute("x"));
  var apple1y=Number(document.getElementById("apple1").getAttribute("y"));
  var apple2X=Number(document.getElementById("apple2").getAttribute("x"));
  var apple2y=Number(document.getElementById("apple2").getAttribute("y"));
  //Enemy's location
  var EnemyX = Number(document.getElementById("Enemy").getAttribute("x"));
  var EnemyY = Number(document.getElementById("Enemy").getAttribute("y"));
  if(e.keyCode == 37 || e.keyCode == 65){
    PlayerX -=10;
 document.getElementById("Player").setAttribute("x", PlayerX)
 Health--
  }
  else if(e.keyCode == 39|| e.keyCode == 68){
    PlayerX +=10;
 document.getElementById("Player").setAttribute("x", PlayerX)
 Health--

  }
  if(e.keyCode == 40 || e.keyCode == 83){
    PlayerY +=10;
 document.getElementById("Player").setAttribute("y", PlayerY)
  Health--

  }
  else if(e.keyCode == 38|| e.keyCode == 87){
    PlayerY -=10;
 document.getElementById("Player").setAttribute("y", PlayerY)
  Health--
  }
  //moves player to other side of board if they go over
  if(PlayerX <= -15){
 PlayerX = 385;
  }
  else if(PlayerX >= 395){
PlayerX = -15;
  }
  //moves enemy to another y axis when it crosses the border
  if(EnemyX >= 375){
  document.getElementById("Enemy").setAttribute("y",NumGen(0, 160));
  }
    HealthText.textContent = "Health:" + Health;
//checks players location against apple's location
  if(PlayerX >= apple1X-20 && PlayerX <= apple1X+20 && PlayerY >= apple1y-20 && PlayerY <= apple1y+20 ){
    apple1Speed *= 0.9;
    document.getElementById("apple1").setAttribute("x",NumGen(75, 390));
    document.getElementById("apple1Ani").setAttribute("dur",apple1Speed);
EatApple();
  }
  else if(PlayerX >= apple2X-20 && PlayerX <= apple2X+20 && PlayerY >= apple2y-20 && PlayerY <= apple2y+20 ){
    apple2Speed *= 0.9;
    document.getElementById("apple2").setAttribute("x",NumGen(75, 390));
        document.getElementById("apple2Ani").setAttribute("dur",apple2Speed);
  EatApple();
  }
  //checks if player hits the enemy
  if(PlayerX >= EnemyX-20 && PlayerX <= EnemyX+20 && PlayerY >= EnemyY-20 && PlayerY <= EnemyY+20 ){
    Health -= 20;
    document.getElementById("apple1").setAttribute("x",NumGen(75, 390));
    document.getElementById("apple1Ani").setAttribute("dur",apple1Speed);
EatApple();
  }
  if(Health <= 0){
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
  Health += 10;
  if(Health > 100){
    Health = 100
  }
}
