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

}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);