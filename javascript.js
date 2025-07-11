const choice = document.querySelector(".choice-wrap")
const result = document.querySelector(".results");

function computerChoice() {
    return Math.floor(Math.random() * 3);
}

function playGame(event) {
    console.log(event);
}

choice.addEventListener("click", playGame)

