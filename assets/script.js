// Global variables
var currentPassword = null;
var generateBtn = document.querySelector('#generate');
var copyButton = document.querySelector('#copypassword');


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);