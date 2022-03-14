// Assignment code here

// get the password length from user --passLong--

//assemble an array of random characters --passArray-- that is --passLong-- in length
  // randomly draw from one of the randomly generated character generators below 

    // create an array for numbers --passNum--
      // generate random number from array
    // create an array for special characters --passSpec--
      // generate random special characters from array
    // create an array for lowercase letters --passLow--
      // generate random lowercase letters from array
    // create an array for uppercase letters --passUp--
      // generate random uppercase letters from array
    // reset the generators for the next random charachter draw



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
