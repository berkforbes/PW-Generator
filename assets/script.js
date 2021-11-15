// Global variables
var currentPassword = null;
var generateBtn = document.querySelector('#generate');
var copyButton = document.querySelector('#copypassword');

function generatePassword() {

  // Character arrays
  var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

  // Array placeholders
  var resultArray = [];
  var passwordCharacters = [];

  // Promt and Confirm variables
  var characterCount = prompt("Your password must contain between 8-128 characters. How many characters would you like in your password?");
  var useNumbers = confirm("Would you like your password to contain numbers?");
  var useUppercase = confirm("Would you like your password to contain uppercase letters?");
  var useLowercase = confirm("Would you like your password to contain lowercase letters?");
  var useSpecialCharacters = confirm("Would you like your password to contain special characters?");

  // Conditions of the arrays
  if (useNumbers) {
    resultArray = resultArray.concat(numbers);
  }

  if (useUppercase) {
    resultArray = resultArray.concat(uppercaseLetters);
  }

  if (useLowercase) {
    resultArray = resultArray.concat(lowercaseLetters);
  }

  if (useSpecialCharacters) {
    resultArray = resultArray.concat(specialCharacters);
  }

  // If user answers no to all questions, set it to special characters
  if (resultArray.length === 0) {
    resultArray = specialCharacters
  }
  for (var i = 0; i < characterCount; i++) {
    passwordCharacters.push(resultArray[Math.floor(Math.random() * resultArray.length)]);
  }

  return passwordCharacters.join("");
}

// Write password to the #password input
function writePassword() {
  currentPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = currentPassword;

  copyButton.removeAttribute("disabled");
  copyButton.focus();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);