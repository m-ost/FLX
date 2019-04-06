let userChoise = '';
let computerChoise = '';
let userScore = 0;
let compuerScore = 0;
let score = '';
let finalResult = '';
let round = 0;
let result = document.getElementsByClassName('result')[0];
const choises = ['Rock','Paper','Scissors'];
const finalResultText = document.getElementsByClassName('final-result')[0];
const rockBtn = document.getElementsByClassName('rock')[0];
const paperBtn = document.getElementsByClassName('paper')[0];
const scissorsBtn = document.getElementsByClassName('scissors')[0];

let showResult = () => {
  result.style.display = 'block';
  result.innerHTML = `Round ${round}, ${userChoise} vs. ${computerChoise}, ${score}`;
}

let getComputerChoise = () => computerChoise = choises[Math.floor(Math.random()*3)];

let win = () => {
  userScore ++;
  score = 'You win!';
  showResult();
}

let loose = () => {
  compuerScore ++;
  score = 'You lose!';
  showResult();
}

let draw = () => {
  score = `It's a tie!`
  showResult();
}

let showFinalResult = () => {
  if(userScore > compuerScore) {
    finalResult = `You've won with the result ${userScore} / ${compuerScore}`;
  } else if (compuerScore > userScore){
    finalResult = `You've lost with the result ${userScore} / ${compuerScore}`;
  } else {
    finalResult = `It's a tie!`
  }
  finalResultText.innerHTML = finalResult;
  }

let game = choise => {
  console.info(round);
  if(round < 3) {
    round++;
    getComputerChoise();
    userChoise = choise;
    console.info(userChoise + computerChoise);
    switch (userChoise + computerChoise) {
      case 'RockScissors':
      case 'PaperRock':
      case 'ScissorsPaper':
        win();
        break;
      case 'ScissorsRock':
      case 'RockPaper':
      case 'PaperScissors':
        loose();
        break;
      case 'ScissorScissors':
      case 'PaperPaper':
      case 'RockRock':
        draw();
        break;
    }
    showResult();
    if(round === 3) {
      showFinalResult();
    }
  } else {
    showFinalResult();
  }
}

const resetBtn = document.querySelector('.reset-button');
resetBtn.addEventListener('click', function () {
  round = 0;
  userScore = 0;
  compuerScore = 0;
  result.innerHTML = null;
  finalResultText.innerHTML = null;
});

rockBtn.addEventListener('click', () => {
  game('Rock');
});

paperBtn.addEventListener('click', () => {
  game('Paper');
});

scissorsBtn.addEventListener('click', () => {
  game('Scissors');
});
