const startGameBtn = document.getElementById('start-game-btn');
     
      const ROCK = 'ROCK';
      const PAPER = 'PAPER';
      const SCISSORS = 'SCISSORS';
      const  DEFAULT_USER_CHOICE = ROCK
      let gameIsRunning = false;
      const RESULT_DRAW = 'DRAW'; 
       const  RESULT_PLAYER_WIN = 'PLAYER_WIN';
       const RESULT_COMPUTER_WIN = 'COMPUTER_WIN'
  const getPlayerChoice =  () => {
        const  selection = prompt(`${ROCK} ,${PAPER} or ${SCISSORS}?`,'').toUpperCase();
        if(
            selection !==  ROCK &&
            selection !==   PAPER &&
            selection !==  SCISSORS

    ){
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
  }




// function startGame() {
//     console.log('Game is Starting...');
// }

//  const person = {
//      name: 'Max',
//       greet: function greet() {
//             console.log("Hello There!");
//       }
//  } 


   

//  person.greet();
 
  const getComputerChoice =  () => {
        const randomValue = Math.random();
             if(randomValue < 0.34){
               return ROCK;
             }else if(randomValue < 0.67){
                return PAPER;
             }else{
               return SCISSORS;
             }

  };

  const getWinner = (cChoice,pChoice) => {
             return cChoice === pChoice ? RESULT_DRAW : (
                 cChoice === ROCK && pChoice === PAPER ||
                 cChoice  === PAPER && pChoice === SCISSORS,
                 cChoice=== SCISSORS && pChoice === ROCK 
                 ) ? RESULT_PLAYER_WIN : RESULT_COMPUTER_WIN  
    
    
    // if(cChoice ===pChoice){
            //  return  RESULR_DRAW;
            // }else if(
            //   cChoice === ROCK && pChoice === PAPER ||
            //   cChoice  === PAPER && pChoice === SCISSORS,
            //    cChoice=== SCISSORS && pChoice === ROCK 
            //   ){
            //             return RESULT_PLAYER_WIN;
            // }else{
            //   return RESULT_COMPUTER_WIN;
            // }
  }

 startGameBtn.addEventListener('click',() => {
    if(gameIsRunning){
      return;
    }
   gameIsRunning = true;
   console.log('Game is Starting...');
  const playerChoice = getPlayerChoice();
  // console.log(playerSelection); 
   const ComputerChoice = getPlayerChoice();
   const winner = getWinner( ComputerChoice,playerChoice);   
    let mesaage = `You picked ${playerChoice}, computer picked ${ComputerChoice} there for you had a draw .`; 
   if(winner === RESULT_DRAW){
       mesaage = message + 'Draw';
      }else if(winner === RESULT_PLAYER_WIN){
           message = message + 'Won';
      }else{
        message = message + 'Lost.';
      }
 });