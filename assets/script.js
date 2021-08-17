// Assignment Code
var generateBtn = document.getElementById("generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var passwordLength;
var lowercaseCheck;
var uppercaseCheck;
var numberCheck;
var specialCheck;
var nochoiceCheck;
var userChoice;

// Phase 1: Determine the length of password from minimum 8 characters to 128 maximum characters
// Next few functions are to catch any errors made by the user inputing anything less than 8, more than 128 and/or
// a word instead of a number.
function designPw() {
  var begin = prompt(
    "Yo. Pick a number between 8 and 128. Don't try to be sneaky. I am watching you."
  );

  if (!begin) {
    //This is incase the user just presses enter with no value
    alert("Oooops. Looks like you didn't put anything here...");
  } //Next we watch out for if the user inputs below 8 and above 128
  else if (begin < 8 || begin > 128) {
    begin = parseInt(
      prompt("Hey dude, you need to have it between 8 and 128.")
    );
  }

  var password = ""; //doesn't matter if its here, but has to be before you use it.

  //Creates a boolean that stores the user's choices
  lowercaseCheck = confirm("Do you want lowercase characters?");
  uppercaseCheck = confirm("Do you want uppercase characters?");
  numberCheck = confirm("Do you want numbers in your password?");
  specialCheck = confirm(
    "And last but not least, do you want special characters?"
  );

  if (lowercaseCheck) {
    userChoice += lowercaseChar;
  }
  if (uppercaseCheck) {
    userChoice += uppercaseChar;
  }
  if (numberCheck) {
    userChoice += numberChar;
  }
  if (specialCheck) {
    userChoice += specialChar;
}

// The equation that makes the user choice into a random password.

  for (var i = 0; i < begin; i++) {
    password += userChoice.charAt(
      Math.floor(Math.random() * userChoice.length)
    );
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = "";
  var password = designPw();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to "generate button"
generateBtn.addEventListener("click", writePassword);