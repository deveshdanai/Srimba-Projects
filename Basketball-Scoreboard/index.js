
let scoreHome = document.getElementById("score-Home");
let scoreH = 0;
function plusOneHome(){
    scoreHome.textContent = scoreH += 1;
}

function plusTwoHome(){
    scoreHome.textContent = scoreH += 2;
}

function plusThreeHome(){
    scoreHome.textContent = scoreH += 3;
}

let scoreGuest = document.getElementById("score-Guest");
let scoreG = 0;

function plusOneGuest(){
    scoreGuest.textContent = scoreG += 1;
}

function plusTwoGuest(){
    scoreGuest.textContent = scoreG += 2;
}

function plusThreeGuest(){
    scoreGuest.textContent = scoreG += 3;
}
