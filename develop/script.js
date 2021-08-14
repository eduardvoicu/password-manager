// Assignment Code
var generateBtn = document.getElementById("generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var passwordLength;
var lowercaseCheck;
var uppercaseCheck;
var numberCheck;
var specialCheck;
var userChoice;

// Phase 1: Determine the length of password from minimum 8 characters to 128 maximum characters
// Next few functions are to catch any errors made by the user inputing anything less than 8, more than 128 and/or
// a word instead of a number.

/* const uppercaseCheckOk = true;
const uppercaseCheckCancel = false;
const numberCheckOk = true;
const numberCheckCancel = false;
const specialCheckOk = true;
const specialCheckCancel = false; */

function designPw() {

var begin = (prompt("Yo. Pick a number between 8 and 128. Don't try to be sneaky. I am watching you."));

if (!begin) {
    //This is incase the user just presses enter with no value
    alert("Oooops. Looks like you didn't put anything here...");
} //Next we watch out for if the user inputs below 8 and above 128
else if ((begin <8) || (begin >128)) {

    begin = parseInt(prompt("Hey dude, you need to have it between 8 and 128."))
}

  var password = ""

  lowercaseCheck = confirm("Do you want lowercase characters?");
  uppercaseCheck = confirm("Do you want uppercase characters?");
  numberCheck = confirm("Do you want numbers in your password?");
  specialCheck = confirm("And last but not least, do you want special characters?");

  if (lowercaseCheck) {
      userChoice += lowercaseChar
  }
  }

/* var determineLength = prompt("Yo. Pick a number between 8 and 128. Don't try to be sneaky. I am watching you.");

function determineLength(){

  
  if ((passwordLength<8) || (passwordLength>128 || (isNaN(8-128)))){
      alert("Oops! Looks like something broke down. Please enter a number between 8 and 128.");
      determineLength();
  }
  }
  else{
    alert("Please choose your options on what you want your random password to include on the next few prompts.");
  }
  return passwordLength;
  


}
*/



function determineLowerChar() {

  var determineLowerChar = prompt("");
  if (confirm("You want lower case or nah?")); {
      console.log("ljljlj");
  }


}
/* function determineLength(){

  userChoice = window.prompt("Let's get your secure password. Select your super awesome features next.");
  intro = prompt("Select how long your password should be. For your account security choose between 8 and 128 characters.");
  var passwordLength = prompt("How many characters do you want your password to be?");

if ((passwordLength=>8) || (passwordLength<=128)) {
      alert("So far so good. Let's see if we can spice it up a little bit!");
}
else if {
      alert("Sorry, you must enter a number between 8 and 128.");

}
}
//If user enters >8, proceed to next question in regards to lower case or uppercase.
// var userChoice = window.prompt("Enter length of password between no less than 8 characters and no more than 128, please.");
*/

// Write password to the #password input
function writePassword() {
  var password = "";
  var password = designPw();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to "generate button"
generateBtn.addEventListener("click", writePassword);

// Phase 2: Determine if user wants UPPER case, LOWER case, special characters AND NUMERIC
// Every response will be recorded and validated to the user after each answer
