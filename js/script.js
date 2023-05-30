var variable1 = Math.floor(Math.random()*3) + 1;
document.querySelector(".img1").setAttribute("src", "./img/" + variable1 + ".png");

var variable2 = Math.floor(Math.random()*3) + 1;
document.querySelector(".img2").setAttribute("src", "./img/" + variable2 + ".png");

if (variable1 == 1) {
    document.querySelector(".pokemon1").innerHTML = "Venusaur";
} else if (variable1 == 2) {
    document.querySelector(".pokemon1").innerHTML = "Charizard";
} else if (variable1 == 3) {
    document.querySelector(".pokemon1").innerHTML = "Blastoise";
}

if (variable2 == 1) {
    document.querySelector(".pokemon2").innerHTML = "Venusaur";
} else if (variable2 == 2) {
    document.querySelector(".pokemon2").innerHTML = "Charizard";
} else if (variable2 == 3) {
    document.querySelector(".pokemon2").innerHTML = "Blastoise";
}

if (variable1 == 1 && variable2 == 2) {
    document.querySelector("h1").innerHTML= "Player 2 wins!";
} else if (variable1 == 2 && variable2 == 1) {
    document.querySelector("h1").innerHTML= "Player 1 wins!";
} else if (variable1 == 2 && variable2 == 3) {
    document.querySelector("h1").innerHTML= "Player 2 wins!";
} else if (variable1 == 3 && variable2 == 2) {
    document.querySelector("h1").innerHTML= "Player 1 wins!";
} else if (variable1 == 3 && variable2 == 1) {
    document.querySelector("h1").innerHTML= "Player 2 wins!";
} else if (variable1 == 1 && variable2 == 3) {
    document.querySelector("h1").innerHTML= "Player 1 wins!";
} else if (variable1 == 1 && variable2 == 1) {
    document.querySelector("h1").innerHTML= "Draw!"
} else if (variable1 == 2 && variable2 == 2) {
    document.querySelector("h1").innerHTML= "Draw!"
} else if (variable1 == 2 && variable2 == 2) {
    document.querySelector("h1").innerHTML= "Draw!";
}

