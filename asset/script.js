// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var lower = "qwertyuiopasdfghjklzxcvbnm";
  var number = '0123456789';
  var punctuation = '!@#_';
  var password = "";

  var lenSelect = window.prompt("Input password length between 8-128.");
  if (lenSelect > 8 && lenSelect < 128){
    window.alert("Your password length will be " + lenSelect);
  }
  else {
    window.alert("Input does not match expected response");
  }

  var lowerSelect = window.prompt("Include lowercase characters? Y/N");
  if (lowerSelect == 'Y' || lowerSelect == 'N'){
    window.alert("You have selected " + lowerSelect);
  }
  else {
    window.alert("Input does not match expected response");
  }
  var upperSelect = window.prompt("Include uppercase characters? Y/N");
  if (upperSelect == 'Y' || upperSelect == 'N'){
    window.alert("You have selected " + upperSelect);
  }
  else {
    window.alert("Input does not match expected response");
  }

  var numSelect = window.prompt("Include Numbers? Y/N");
  if (numSelect == 'Y' || numSelect == 'N'){
    window.alert("You have selected " + numSelect);
  }
  else {
    window.alert("Input does not match expected response");
  }

  var charSelect = window.prompt("Include Special characters? Y/N");
  if (charSelect == 'Y' || charSelect == 'N'){
    window.alert("You have selected " + charSelect);
  }
  else {
    window.alert("Input does not match expected response");
  }

  for (let i = 0; i < ((lenSelect/4)-1); i++) {
    if (upperSelect == 'Y'){
      password += upper[Math.floor(Math.random() * (upper.length))];
    }
    if (lowerSelect == 'Y'){
      password += lower[Math.floor(Math.random() * (lower.length))];
    }
    if (numSelect == 'Y'){
      password += number[Math.floor(Math.random() * 10)];
    }
    if (charSelect == 'Y'){
      password += punctuation[Math.floor(Math.random() * (punctuation.length))];
    }
  }

  for (let i = 0; i < (lenSelect % 4); i++){
    if (upperSelect == 'Y'){
      password += upper[Math.floor(Math.random() * (upper.length))];
  }}
  
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
