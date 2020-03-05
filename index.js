
function roll() {
  var randomNumber1 = Math.floor(Math.random()*6 + 1);
  var randomNumber2 = Math.floor(Math.random()*6 + 1);

  var imgRand1 = "images/dice" + randomNumber1 + ".png";
  var imgRand2 = "images/dice" + randomNumber2 + ".png";
  document.getElementsByTagName("img")[0].setAttribute("src", imgRand1);
  document.getElementsByTagName("img")[1].setAttribute("src", imgRand2);


  if(imgRand1 > imgRand2) {
    document.querySelector("h1").innerHTML="🥇PLAYER 1 WINS!";
  }
  else if(imgRand1 < imgRand2) {
    document.querySelector("h1").innerHTML="PLAYER 2 WINS!🥇";
  }
  else {
    document.querySelector("h1").innerHTML="DRAW!";
  }

}
