var PlayerX = Number(document.getElementById("Player").getAttribute("x"));
var PlayerY = Number(document.getElementById("Player").getAttribute("y"));


document.addEventListener("keydown", function(e) {
  var apple1X=Number(document.getElementById("apple1").getAttribute("x"));
  var apple1y=Number(document.getElementById("apple1").getAttribute("y"));
  var apple2X=Number(document.getElementById("apple2").getAttribute("x"));
  var apple2y=Number(document.getElementById("apple2").getAttribute("y"));
  if(e.keyCode == 37 || e.keyCode == 65){
    PlayerX -=10;
 document.getElementById("Player").setAttribute("x", PlayerX)

  }
  else if(e.keyCode == 39|| e.keyCode == 68){
    PlayerX +=10;
 document.getElementById("Player").setAttribute("x", PlayerX)

  }
  if(e.keyCode == 40 || e.keyCode == 83){
    PlayerY +=10;
 document.getElementById("Player").setAttribute("y", PlayerY)

  }
  else if(e.keyCode == 38|| e.keyCode == 87){
    PlayerY -=10;
 document.getElementById("Player").setAttribute("y", PlayerY)
  }
//checks players location against apple's location
  if(PlayerX >= apple1X-15 && PlayerX <= apple1X+15 && PlayerY >= apple1y-15 && PlayerY <= apple1y+15 ){
    document.getElementById("apple1").setAttribute("x",NumGen(75, 425));
  }
  else if(PlayerX >= apple2X-15 && PlayerX <= apple2X+15 && PlayerY >= apple2y-15 && PlayerY <= apple2y+15 ){
    document.getElementById("apple2").setAttribute("x",NumGen(75, 425));
  }
});
//random number generator
function NumGen(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
