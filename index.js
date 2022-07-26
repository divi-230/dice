//dice1
var randomnumber1=Math.floor(Math.random()* 6)+1;

var randomimg = "dice" + randomnumber1 + ".png";

var randomsrc1 = "images/" + randomimg;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomsrc1);

//dice2
var randomnumber2=Math.floor(Math.random()* 6)+1;

var randomimage = "dice" + randomnumber2 + ".png";

var randomsrc2 = "images/" + randomimage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomsrc2);

//win or loss

if(randomnumber1>randomnumber2)
{
     document.querySelector(".h1").innerHTML="🚩 player1 win ";
}
else if (randomnumber1<randomnumber2)
{
     document.querySelector("h1").innerHTML="🚩 player2 win ";
}
else
{
     document.querySelector("h1").innerHTML="draw!";
}