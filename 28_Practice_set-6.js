// Q-1  Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive!
let age = prompt("Enter your age : ");
age = Number.parseInt(age);

function driveEligibility(age){
    if(age>=18){
        alert("You are Eligible to Drive");
    }
    else if(age<=0){    // Q-3  In the previous question, use console.error to log the error if the age entered is negative.
        alert("The age entered is negative.")
        console.error("The age entered is negative.")
    }    
    else{
        alert("Your are not Eligible to drive.");
    }
}
driveEligibility(age);

// Q-2  In Q1 use confirm to ask the user if he wants to see the prompt again.
let check = confirm("Do you want to enter your age again?");
if (check == false){
    driveEligibility(age);
}
else{
    let age = prompt("Enter your age again : ");
    driveEligibility(age);
}
  

// Q-4  Write a program to change the URL to google.com(Redirection) if user enters a number greater than 4.
let num = prompt("Enter the number between 1-10 :")
if(num>4){
    location.href = "https://www.google.com/"
}

// Q-5  Change the background of the page to yellow,red or any other color based on user input through prompt.

else if(num==1){
    document.body.style.background = "Cyan"
}
else if(num==2){
    document.body.style.background = "Purple"
}
else if(num==3){
    document.body.style.background = "Black"
}
else{
    document.body.style.background = "Red"
}