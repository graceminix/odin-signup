var password = document.getElementById("password");
var confirm_password = document.getElementById("password2");
var errorm = document.getElementById("error1");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
    password.className = "error";
    confirm_password.className = "error";
    errorm.className = "error1";
  } else {
    confirm_password.setCustomValidity('');
    password.className = "valid";
    confirm_password.className = "valid";
    errorm.className = "valid1";
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;