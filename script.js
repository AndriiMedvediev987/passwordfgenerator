// Assignment Code
var generateBtn = document.querySelector("#generate");

let generatePassword = function () {
  let passwordChars = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  };

  let result = "";
  let characters = passwordChars.lower;
  // prompt password length
  let passwordLength = Number(window.prompt("Set password length, minimum 8, maximum 128 characters"));
  if (!passwordLength)
    passwordLength = 8;
  else {
    passwordLength = Math.max(Math.min(passwordLength, 128), 8);
  }

  // prompt char types
  let charTypes = window.prompt("Choose character types lowercase(L), uppercase(U), numeric(N), and/or special characters(S)");
  if (charTypes) {
    switch (charTypes.toLowerCase()) {
      case 'l':
        characters = passwordChars.lower;
        break;
      case 'u':
        characters = passwordChars.upper;
        break;
      case 'n':
        characters = passwordChars.numeric;
        break;
      case 's':
        characters = passwordChars.special;
        break;
    }
  }
  // generate random password with specified length using specified characters
  for (let i = 0; i < passwordLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
