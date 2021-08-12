// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;
var userChoice;

// Phase 1: Determine the length of password from minimum 8 characters to 128 maximum characters
// Next few functions are to catch any errors made by the user inputing anything less than 8, more than 128 and/or
// a word instead of a number.

const uppercaseCheckOk = true;
const uppercaseCheckCancel = false;
const numberCheckOk = true;
const numberCheckCancel = false;
const specialCheckOk = true;
const specialCheckCancel = false;



function determineLength(){

  
  if (passwordLength<8 || passwordLength>128){
      alert("Oops! Something went wrong. Please enter a number between 8 and 128.");
      determineLength();
  }
  // Try passwordlength>128 separate.

  else if (isNaN(passwordLength)){
    alert("Oops! Something went wrong. Please enter a number between 8 and 128.");
    determineLength();
  }
  else{
    alert("Please choose your options on what you want your random password to include on the next few prompts.");
  }
  return passwordLength;
  
}

var userChoice = window.prompt("Enter length of password between no less than 8 characters and no more than 128, please.");

//If user enters >8, proceed to next question in regards to lower case or uppercase.

if (!userChoice) {

}

// Write password to the #password input
function writePassword() {
  var password = "";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Phase 2: Determine if user wants UPPER case, LOWER case, special characters AND NUMERIC
// Every response will be recorded and validated to the user after each answer
