//sets gameover screen invisable
  document.getElementById("gameover").style.visibility = "hidden";
//player's location
var PlayerX = Number(document.getElementById("Player").getAttribute("x"));
var PlayerY = Number(document.getElementById("Player").getAttribute("y"));
//time at game start
var timeStart = Date.now()
//food eaten which is the score and the score element and Health and its element
var FoodEaten = 0;
var ScoreText = document.getElementById("score");
var Health = 100;
var HealthText = document.getElementById("Health");
//apple & enemy speeds
var apple1Speed = 2;
var apple2Speed = 2;
var EnemySpeed = 10;
//checks if the game is active
var Gamebool = true;
//score based on moves
var MoveScore =0;
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
  //Box's location
  var BoxX = Number(document.getElementById("box").getAttribute("x"));
  var BoxY = Number(document.getElementById("box").getAttribute("y"));
  if(e.keyCode == 37 || e.keyCode == 65){
    PlayerX -=10;
 document.getElementById("Player").setAttribute("x", PlayerX)
PlayerMove();
  }
  else if(e.keyCode == 39|| e.keyCode == 68){
    PlayerX +=10;
 document.getElementById("Player").setAttribute("x", PlayerX)
PlayerMove();
  }
  if(e.keyCode == 40 || e.keyCode == 83){
    PlayerY +=10;
 document.getElementById("Player").setAttribute("y", PlayerY)
PlayerMove();
  }
  else if(e.keyCode == 38|| e.keyCode == 87){
    PlayerY -=10;
 document.getElementById("Player").setAttribute("y", PlayerY)
PlayerMove();
  }
  //moves player to other side of board if they go over
  if(PlayerX <= -15){
 PlayerX = 385;
  }
  else if(PlayerX >= 385){
PlayerX = -15;
  }
  if(PlayerY <= -15){
 PlayerY = 160;
  }
  else if(PlayerY >= 160){
PlayerY = -15;
  }
  //moves enemy to another y axis when it crosses the border
  if(EnemyX >= 375){
  document.getElementById("Enemy").setAttribute("y",NumGen(0, 160));
  }
//checks players location against apple's location
  if(PlayerX >= apple1X-30 && PlayerX <= apple1X+30 && PlayerY >= apple1y-30 && PlayerY <= apple1y+30 ){
    apple1Speed *= 0.9;
    document.getElementById("apple1").setAttribute("x",NumGen(75, 390));
    document.getElementById("apple1Ani").setAttribute("dur",apple1Speed);
EatApple();
  }
  else if(PlayerX >= apple2X-30 && PlayerX <= apple2X+30 && PlayerY >= apple2y-30 && PlayerY <= apple2y+30 ){
    apple2Speed *= 0.9;
    document.getElementById("apple2").setAttribute("x",NumGen(75, 390));
        document.getElementById("apple2Ani").setAttribute("dur",apple2Speed);
  EatApple();
  }
  //checks if player hits the enemy
  if(PlayerX >= EnemyX-15 && PlayerX <= EnemyX+15 && PlayerY >= EnemyY-15 && PlayerY <= EnemyY+15 ){
    document.getElementById("Player").setAttribute("xlink:href","images/Enemy.gif")
    Health -= 20;
  }
  //checks if player hits the box
  if(PlayerX >= BoxX-20 && PlayerX <= BoxX+20 && PlayerY >= BoxY-20 && PlayerY <= BoxY+20 ){
 console.log("boop");
  }
  //gameover
  if(Health <= 0){
    var timeStop = Date.now()
      SurTime.textContent = "YOU SURVIVED FOR "+ Math.round((timeStop - timeStart)/1000) +" SECONDS" ;
  document.getElementById("game").style.visibility = "hidden";
    document.getElementById("gameover").style.visibility = "visible";
      gameoverscore.textContent = "FINAL SCORE: " + (FoodEaten + MoveScore);
      Gamebool = false;
//HighScore logic
          if ( (FoodEaten+MoveScore) > localStorage.getItem('highScoreStored') ) {
              localStorage.setItem('highScoreStored', (FoodEaten+MoveScore) );
                    HighScore.textContent = "NEW HIGHSCORE: " + (FoodEaten + MoveScore);
          }
          else {
            HighScore.textContent = "HIGHSCORE: " + localStorage.getItem('highScoreStored');
          }
      }
  }
    score.textContent = "SCORE:" + (FoodEaten+MoveScore);
});

//random number generator
function NumGen(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function EatApple(){
  FoodEaten+=10
  score.textContent = "SCORE:" + (FoodEaten+MoveScore);
  Health += 10;
  //prevents overheal
  if(Health > 100){
    Health = 100
  }
}
function PlayerMove(){
      document.getElementById("Player").setAttribute("xlink:href","images/Player.gif");
  Health--
  MoveScore++
}
//moves enemy after it finsihes its move animation
setInterval(function(){ document.getElementById("Enemy").setAttribute("y",PlayerY)},5000);
//updates health text
setInterval(function(){  HealthText.textContent = "Health:" + Health;}, 10);
