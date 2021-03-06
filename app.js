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
        return;
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

  const getWinner = (cChoice,pChoice = DEFAULT_USER_CHOICE) => {
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
    let winner;
   if(playerChoice){
     winner = getWinner( ComputerChoice,playerChoice); 
   }else{
     winner = getWinner(ComputerChoice);
   }
    let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${ComputerChoice} there for you had a draw .`; 
   if(winner === RESULT_DRAW){
       message = message + 'had draw';
      }else if(winner === RESULT_PLAYER_WIN){
           message = message + 'Win';
      }else{
        message = message + 'Lost';
      }
       alert(message);
       gameIsRunning = false; 
 });


 // not related to the game
       
  const sumUp = (resultHandler,...number)=>{
        const validateNumber = (number) => {
           
            return isNaN(number) ? 0 : number;
        };

    let sum = 0;
      
     for( num of number){
       sum +=validateNumber(num);
     } resultHandler(sum,'The result after adding all Numbers is');
  };
       const subtractUP = (resultHandler,...number) =>{
        let sum = 0;
        for(const num of number){
          sum -=num;

        }
         resultHandler(sum);
       }
        

      //  const showResult = () => {
      //       alert('the result after adding all number is: ')
      //  }

     const showResult = (result,messageText) =>{
       alert( messageText+' '+ result)
     };

  sumUp(showResult,1,5,10,-3,6,10);
    sumUp(showResult,1,5,10,-3,6,10,25,88);
     subtractUP(showResult,1,10,15,20);


   // CallBack Function Example 

   const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "John Doe":
  console.log(person.fullName.call(person1));