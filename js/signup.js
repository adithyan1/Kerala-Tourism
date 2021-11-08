let names = document.getElementsByClassName("name");
let fnameError = document.getElementById("fnameError");
let lnameError = document.getElementById("lnameError");
let email = document.getElementById("email");
let emailError = document.getElementById("emailError");
let number = document.getElementById("number");
let numberError = document.getElementById("numberError");
let pwd = document.getElementById("pwd");
let pwdError = document.getElementById("pwdError");
let pwdRepeat = document.getElementById("pwdRepeat");
let pwdRepeatError = document.getElementById("pwdRepeatError");

function validate(){
    let name_regexp = /^[A-Za-z]+$/;
    let email_regexp = /^([\w\-.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})$/;
    let number_regexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let strong_regexp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/;
    let medium_regexp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    let poor_regexp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;


    if (name_regexp.test(names[0].value)) {
        names[0].style.border = "3px green solid";
        fnameError.innerHTML = "";
    }
    else {
        names[0].style.border = "3px red solid";
        fnameError.innerHTML = "Name should only contain alphabets";
    }
    if (name_regexp.test(names[1].value)) {
        names[1].style.border = "3px green solid"
        lnameError.innerHTML = ""
    }
    else {
        names[1].style.border = "3px red solid";
        lnameError.innerHTML = "Name should only contain alphabets";
    }
    if (email_regexp.test(email.value)) {
        email.style.border = "3px green solid";
        emailError.innerHTML = "";
    }
    else {
        email.style.border = "3px red solid";
        emailError.innerHTML = "Email is invalid";
    }
    if (number_regexp.test(number.value)) {
        number.style.border = "3px green solid";
        numberError.innerHTML = "";
    }
    else {
        number.style.border = "3px red solid";
        numberError.innerHTML = "Phone Number is invalid";
    }
    if (strong_regexp.test(pwd.value)) {
        pwd.style.border = "3px green solid";
        pwdError.innerHTML = "Strong password!";
        pwdError.style.color = "green";
    }
    else if (medium_regexp.test(pwd.value)) {
        pwd.style.border = "3px orange solid";
        pwdError.innerHTML = "Medium password. Increase the length to 10 to make it strong!";
        pwdError.style.color = "orange";
    }
    else if (poor_regexp.test(pwd.value)) {
        pwd.style.border = "3px red solid";
        pwdError.innerHTML = "Poor password. Use symbols and increase the length to make it strong!";
        pwdError.style.color = "red";
    }
    else {
        pwd.style.border = "3px red solid";
        pwdError.innerHTML = "Invalid. Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number ";
        pwdError.style.color = "red";
    }
    if ( pwdRepeat.value != pwd.value ) {
        pwdRepeat.style.border = "3px red solid";
        pwdRepeatError.innerHTML = "Passwords do not match!";
        pwdRepeat.style.color = "red";
    }
    else {
        pwdRepeat.style.border = "3px green solid";
        pwdRepeatError.innerHTML = "Passwords match!";
        pwdRepeat.style.color = "green";
    }
    
}

