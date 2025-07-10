// function getComputerChoice() // 0 - Rock / 1 - Paper / 2 - Scissors
// {
//     return Math.floor(Math.random() * 3);
// };

// function getHumanChoice() 
// {
//     let playerChoice = prompt("Pick Rock Paper or Scissors");
//     console.log(playerChoice);
//     return playerChoice;
// };

// let humanScore = 0;
// let computerScore = 0;

// function playRound(humanChoice, computerChoice)
// {
//     humanChoice = humanChoice.toLowerCase();
//     if(humanChoice == "rock" && computerChoice == 2) // player win
//     {
//         return "win";
//     } else if(humanChoice == "paper" && computerChoice == 0) // player win
//     {
//         return "win";
//     } else if(humanChoice == "scissors" && computerChoice == 1) // player win
//     {
//         return "win";
//     } else if(humanChoice == "rock" && computerChoice == 1) // computer win
//     {
//         return "lose";
//     } else if(humanChoice == "paper" && computerChoice == 2) // computer win
//     {
//         return "lose";
//     } else if(humanChoice == "scissors" && computerChoice == 0) // computer win
//     {
//         return "lose";
//     }
//     else // tie
//     {
//         return "tie";
//     }
// }

// function playGame()
// {
//     for(let i = 0; i < 5; i++)
//     {
//         let humanChoice = getHumanChoice();
//         let computerChoice = getComputerChoice();

//         let result = playRound(humanChoice, computerChoice);
//         if(result == "win") humanScore++;
//         if(result == "lose") computerScore++;
//     }
//     if(humanScore > computerScore)
//     {
//         alert("You won!");
//     } else if(computerScore > humanScore)
//     {
//         alert("You lost!");
//     }
//     else
//     {
//         alert("You tied!");
//     }
// }

// playGame();