var PlayerX = 175;
var PlayerY = 50;
document.addEventListener("keydown", function(e) {
  if(e.keyCode == 37){
    PlayerX -=15;
 document.getElementById("Player").setAttribute("x", PlayerX)

  }
  else if(e.keyCode == 39){
    PlayerX +=15;
 document.getElementById("Player").setAttribute("x", PlayerX)

  }
});
