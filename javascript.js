const choices = document.querySelectorAll(".choice-wrap");
const result = document.querySelector(".results");

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}
// 0 - Rock / 1 - Paper / 2 - Scissors
function determineWinner(userChoice, computerChoice)
{
    if(userChoice == 'rock')
    {
        if(computerChoice == 1)
        {
            return 'loss';
        }
        else if(computerChoice == 2)
        {
            return 'win';
        }
    }
    if(userChoice == 'paper')
    {
        if(computerChoice == 2)
        {
            return 'loss';
        }
        else if(computerChoice == 0)
        {
            return 'win';
        }
    }
    if(userChoice == 'scissors')
    {
        if(computerChoice == 1)
        {
            return 'win';
        }
        else if(computerChoice == 0)
        {
            return 'loss';
        }
    }
    return 'tie';
}

function updateResultBox(gameResult)
{
    if(gameResult == 'win')
    {
        return 'Congratulations you win!'
    }
    else if(gameResult == 'loss')
    {
        return 'The Computer has won'
    }
    else
    {
        return 'It was a tie!'
    }
}

function playGame(event) {
    const choiceElement = event.target.closest('.choice-wrap');
    const userChoice = choiceElement.dataset.choice;
    const computerChoice = getComputerChoice();

    const matchResult = determineWinner(userChoice, computerChoice);
    result.textContent = updateResultBox(matchResult);
} 

choices.forEach(choice => {
    choice.addEventListener("click", playGame);
})