/* Q) Write a Javascript program to generate a random number and store it in a variable. 
      The program then takes an input from the user to tell them whether the guess was correct, greater or lesser than the original number.
      100 - (no. of guesses) is the score of the user.
      The program is expected to terminate once the number is guessed. Number should be between 1-100.
*/

let number = Math.floor((Math.random() * 100) + 1); // Generates a random number b/w 1 and 100
let chances = 0; // Initial value of chances taken to guess a number
let guess; // Variable to store the number to be input from user to be guessed

do {
  guess = Number.parseInt(prompt("Enter a number between 1 and 100"));
  chances++;

  if (guess > number) {
    alert("Number entered is greater");
  } 
  else if (guess < number) {
    alert("Number entered is smaller");
  } 
  else {
    alert("Correct guess!");
  }

} while (guess != number); //break the loop if number entered is equal to the number generated

let score = 100 - chances; //To store the score of your game
console.log("\nCongratulations🥳🥳\nThe number generated was", number + " and you guessed it right😁\nYour final score is", score);