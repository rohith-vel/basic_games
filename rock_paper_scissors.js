const getUserChoice= userInput => {
 //userInput = userInput.toLowerCase();
  if (userInput==='rock' || userInput==='paper' || userInput==='scissors')
  {
return userInput;
  }
  else 
    {
      console.log('Pls enter a valid choice');
    }
}
const getComputerChoice= () => {const Computer =Math.floor(Math.random() * 3);
 switch (Computer)
  {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper'
      break;
    case 2:
    return 'scissors'
      break;
    default:
    return '0-2 is valid'
      
  }
                               }
userInput='rock'
const determineWinner =(userChoice,computerChoice) => {
console.log(getComputerChoice())
console.log(getUserChoice('rock'))  
if (getUserChoice(userInput)===getComputerChoice())
    {
      return 'the game is tie';
    }
else if (userInput === 'rock') {
 if (computerChoice === 'paper') {
    return 'The computer won!';
  }
  }
else if (userInput === 'rock') {
  if (computerChoice === 'scissors') {
    return 'you won!';
  }
}
else if (userInput === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  }
   }
  
else  if (userInput === 'paper') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  }
}
else if (userInput === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  }
}
else if (userInput === 'scissors') {
  if (computerChoice === 'paper') {
    return 'The computer won!';
  
  }
      }

}
console.log(determineWinner('paper'))
 
