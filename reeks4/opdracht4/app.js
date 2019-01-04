function passwordChecker() {
    var inputValPassword = document.getElementById("password");
    var inputValConfirmation = document.getElementById("confirmation");
    if (inputValPassword.value === inputValConfirmation.value) {
        inputValPassword.style.background = "green";
        inputValConfirmation.style.background = "green";
    }
    else{
        inputValPassword.style.background = "red";
        inputValConfirmation.style.background = "red";
    }
}
