
let fullname = document.getElementById("fullname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm");


let registerBtn = document.querySelector(".register-btn");


registerBtn.addEventListener("click", function (event) {
    event.preventDefault(); 

    let nameValue = fullname.value.trim();
    let emailValue = email.value.trim();
    let passValue = password.value.trim();
    let confirmValue = confirmPassword.value.trim();

    
    if (nameValue === "" || emailValue === "" || passValue === "" || confirmValue === "") {
        alert("Please fill all fields.");
        return;
    }

   
    if (!emailValue.includes("@") || !emailValue.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    
    if (passValue.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    
    if (passValue !== confirmValue) {
        alert("Passwords do not match.");
        return;
    }

    
    alert("Account created successfully for " + nameValue + "!");

    
    
});