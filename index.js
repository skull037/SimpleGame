var PlayerX = 175;
var PlayerY = 20;
document.addEventListener("keydown", function(e) {
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
});
