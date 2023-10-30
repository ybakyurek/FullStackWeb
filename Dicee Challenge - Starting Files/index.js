var randomNumber1 = Math.round(Math.random()*5)+1;
var randomNumber2 = Math.round(Math.random()*5)+1;


document.querySelector(".img1").setAttribute("src","/Dicee Challenge - Starting Files/images/dice" + randomNumber1 +".png");
document.querySelector(".img2").setAttribute("src","/Dicee Challenge - Starting Files/images/dice" + randomNumber2 +".png");
/*
var randomDiceImage = "dice" + randomNumber1 + " png"; //dice1.png - dice6.png
var randomImageSource = "/Dicee Challenge - Starting Files/images/" + randomDiceImage; //images/dicel.png - images/dice6.png
var image1 = document. querySelectorAll("img")[0];
image. setAttribute("src",randomImageSource);
 */
if(randomNumber1==randomNumber2){
    document.querySelector("h1").textContent = "Draw";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 1 Win";
}
else{
    document.querySelector("h1").textContent = "Player 2 Win🚩";
}