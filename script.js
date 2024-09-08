/* 
1. User inputs their choice.
2. Computer gets randomly assigned choice.
3. After each round the score is tallied.
4. After 5 rounds the match ends.
*/

/*
-- Step 1: Computer choice Logic --
1. Create function getComputerChoice.
2. Create array of choices.
3. Implement the Math.random() Method to return a random number from the list of choices.
*/

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  console.log(choices[Math.floor(Math.random() * choices.length)]);
}

getComputerChoice();
