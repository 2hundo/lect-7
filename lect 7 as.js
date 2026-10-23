function pickanum(){
var num = window.prompt("pick a number between 1-9")
var table = document.getElementById("table")
if(num >= 1 && num <= 10){
    table.innerHTML = "<h1> Multiplication table for " + num + "</h1>"
    for(let i = 1; i<=10; i++){
        console.log
    table.innerHTML += (num + "*" + i + "=" + (num*i) + "<br>");
        }
    }

}


function changecolorRed(){
    let swag = document.getElementsByClassName("swag");
    for(let i = 0; i < swag.length; i++){
    swag[i].style.color = "red";
    }
}

function changecolorGreen(){
    let swag = document.getElementsByClassName("swag");
    for(let i = 0; i < swag.length; i++){
    swag[i].style.color = "green";
    }
}

function changecolorBlue(){
    let swag = document.getElementsByClassName("swag");
    for(let i = 0; i < swag.length; i++){
    swag[i].style.color = "blue";
    }
}

let color = ["red", "green", "blue", "pink", "cyan", "purple", "magenta", "darkblue", "orange", "lightblue"]

function randomcolor(){
    let swag = document.getElementsByClassName("swag")
    for(let i = 0; i < swag.length; i++){
        let randomize = Math.floor(Math.random()*10);
        swag[i].style.color = color[randomize]
    }
}

function reset(){
    let swag = document.getElementsByClassName("swag");
    let color = ["aqua", "blue", "burlywood", "brown", "coral", "cadetblue", "cyan", "darkgoldenrod", "deeppink"];

    for(let i = 0; i < swag.length; i++){
        swag[i].style.color = color[i];
    }
}