window.userScore = 0;
window.computerScore = 0;


//Write the rest of the code here
let score = {
    Wins: 0,
    Losses: 0,
    Ties: 0
};

function Play(playerMove)
{
    //Complete the play function here

    let playerMoveDisplay = document.getElementById("your-pick");
    let computerMoveDisplay = document.getElementById("computer-pick");
    let resultDisplay = document.getElementById("scr");
    let totalOutcomeDisplay = document.getElementById("total-outcome");

    let computerMove = Computer();

    let result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'you lose';
        } else if (computerMove === 'paper') {
            result = 'you win';
        } else if (computerMove === 'scissors') {
            result = 'Tie';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'you win';
          } else if (computerMove === 'paper') {
            result = 'Tie';
          } else if (computerMove === 'scissors') {
            result = 'you lose';
          }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
          } else if (computerMove === 'paper') {
            result = 'you lose';
          } else if (computerMove === 'scissors') {
            result = 'you win';
          }
    }

    playerMoveDisplay.innerHTML = `You pick: <span class="choice">${playerMove}</span>`;
    computerMoveDisplay.innerHTML = `Computer pick: <span class="choice">${computerMove}</span>`;
    resultDisplay.innerHTML = `Score: <span class="choice">${result}</span>`;


    if (result === 'you win') {
        score.Wins += 1;
    } else if (result === 'you lose') {
        score.Losses += 1;
    }else if (result === 'Tie') {
        score.Ties += 1;
    }
    
    totalOutcomeDisplay.innerHTML = `Your wins ${score.Wins}, Computer wins ${score.Losses}, Ties ${score.Ties}`;


//     alert(`you pick ${playerMove} computer pick ${computerMove}. ${result}
//  wins: ${score.Wins}, losses: ${score.Losses}, ties: ${score.Ties}`);

//  displayScore.innerHTML = `your score ${window.userScore} computer score ${window.computerScore}`;
    
}
function Computer(){
    // Computer functions only generated random Choice. Write the related code here
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}

function resetall(){
    let score = {
        Wins: 0,
        Losses: 0,
        Ties: 0
    };

    let playerMoveDisplay = document.getElementById("your-pick");
    let computerMoveDisplay = document.getElementById("computer-pick");
    let resultDisplay = document.getElementById("scr");
    let totalOutcomeDisplay = document.getElementById("total-outcome");

    playerMoveDisplay.innerHTML = "Your pick:";
    computerMoveDisplay.innerHTML = "Computer pick:";
    resultDisplay.innerHTML = "Score:";
    
    totalOutcomeDisplay.innerHTML = `Your wins ${score.Wins}, Computer wins ${score.Losses}, Ties ${score.Ties}`;
    
    return score;
    
}



{/* <p id="user-score">
            <!-- Show the scores here -->
        </p>
        <p id="computer-score">
            
        </p> */}