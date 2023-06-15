// Assignment Code

// variable assigned to id "generate" in HTML = generate password button:
let generateBtn = document.querySelector("#generate");

var symbols = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var finalCharactersPool = "";

var myArr = "abcdefghijklmnopqrstuvwxyz";

// Write password to the #password input
//User to enter data: length p-word, characters, number, special characters:
function generatePassword() {
  var password = "";

  var passwordLengthInput = prompt(
    "Choose a password length between 8 and 128 characters"
  );

  var passwordLength = parseInt(passwordLengthInput, 10);

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    return alert(
      "Please respect the password length criteria between 8 - 128 characters"
    );
  }

  var hasLowercase = confirm(
    "Do you want your password to contain lowercase characters?"
  );

  if (hasLowercase) {
    finalCharactersPool = finalCharactersPool + lowercase;
  }

  var hasUppercase = confirm(
    "Do you want your password to contain uppercase characters?"
  );

  if (hasUppercase) {
    finalCharactersPool = finalCharactersPool + uppercase;
  }
  // is finalCharactersPool += uppercase; the same as code above???

  var hasNumbers = confirm(
    "Do you want your password to contain number characters?"
  );

  if (hasNumbers) {
    finalCharactersPool = finalCharactersPool + numbers;
  }

  var hasSpecial = confirm(
    "Do you want your password to contain special characters?"
  );

  if (hasSpecial) {
    finalCharactersPool = finalCharactersPool + symbols;
  }

  // fix control statement for && || of special and numerical character option

  //at least one character type has to be selected:
  //alternative code: (loop with conditional statement?)
  if (
    hasLowercase === false &&
    hasUppercase === false &&
    hasNumbers === false &&
    hasSpecial === false
  ) {
    return alert(
      "Please make sure you respect the password  criteria and select at least one parameter"
    );
  }
  //instead of:
  // if (!hasLowercase) {
  //   return alert(
  //     "Please make sure you respect the password  criteria and select at least one parameter"
  //   );
  // }

  // the for loop for generating the password
  var randomPassword = "";
  for (let index = 0; index < passwordLength; index++) {
    // grab a random character
    console.log(passwordLength);
    randomPassword =
      randomPassword +
      finalCharactersPool[
        Math.floor(Math.random() * finalCharactersPool.length)
      ];
  }
  return randomPassword;
}

//writes password from the user input in password funtion generator

function writePassword() {
  var password = generatePassword(); //in the password var we store whatever the function returns
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button - should this be at the start of the code?
generateBtn.addEventListener("click", writePassword);
