


var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function options(){
var length=parseInt(
prompt ("How many characters do you want your password to have?")
)
if (isNaN(length)===true){

alert("Invalid");
return;
}
if (length < 8 ){
  alert("Password must be atleast 8 characters");
return;
}
if (length > 128) {
  alert ("Password must be less than 128 characters");
return;
}


options()
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);