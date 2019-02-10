let maxRandom = 6;
let totalPrize = 0;
let finalPrize = 0;
let maxPrize = 10;
let defaultPrize = 10;
let gameIsOn = true;
let attempts = 3;
if (!confirm('Do you want to play a game?')) {
  alert(`You did not become a millionaire, but can.`);
} else {
  while(gameIsOn) {
    let randomNumber = Math.floor(Math.random() * maxRandom);
    let guessed = false;
    for (let tries = 0; tries < 3; tries++) {
      let userNumber = parseInt(prompt(
        `Enter a number from 0 to ${maxRandom}
        Attempts left: ${attempts-tries}
        Total prize: ${totalPrize}$
        Possible prize on current attempt: ${maxPrize}$`
      ));
      if (!userNumber) {
        break;
      }
      if (userNumber === randomNumber) {
        guessed = true;
        totalPrize = maxPrize;
        gameIsOn = confirm(`
        Congratulations! Your prize is ${totalPrize}$.Do you want to continue?
        `);
          if(gameIsOn){
            defaultPrize = defaultPrize * 3;
            maxPrize = defaultPrize;
            maxRandom *= 2;
            finalPrize = maxPrize + totalPrize;
            break;
          }
          if (!gameIsOn) {
             gameIsOn = alert(`Thank you for a game. Your prize is: ${finalPrize}$.`);
             gameIsOn = confirm(`Do you want to play again?`);
             totalPrize = 0;
             maxPrize = 10;
             maxRandom = 5;
          }
        } else {
          guessed = false;
          maxPrize = Math.floor(maxPrize/2);
        }
    }

    if (!guessed) {
      gameIsOn = alert(`Thank you for a game. Your prize is: ${totalPrize}$.`);
      gameIsOn = confirm(`Do you want to play again?`);
      totalPrize = 0;
      maxPrize = 10;
      maxRandom = 5;
    }
  }
}
