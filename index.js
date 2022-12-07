// HOME
let pointsHome = document.getElementById('points-home')
let scoreH = 0

function homePlusOne() {
    scoreH += 1
    pointsHome.innerText = scoreH
}

function homePlusTwo() {
    scoreH += 2
    pointsHome.innerText = scoreH
}

function homePlusThree() {
    scoreH += 3
    pointsHome.innerText = scoreH
}

function homeMinusOne() {
    scoreH -= 1
    pointsHome.innerText = scoreH
}


// GUEST
let pointsGuest = document.getElementById('points-guest')
let scoreG = 0

function guestPlusOne() {
    scoreG += 1
    pointsGuest.innerText = scoreG
}

function guestPlusTwo() {
    scoreG += 2
    pointsGuest.innerText = scoreG
}

function guestPlusThree() {
    scoreG += 3
    pointsGuest.innerText = scoreG
}

function guestMinusOne() {
    scoreG -= 1
    pointsGuest.innerText = scoreG
}


function reset() {
    scoreH = 0
    pointsHome.innerText = 0
    scoreG = 0
    pointsGuest.innerText = 0
}