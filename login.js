
let usernameInput = document.querySelectorAll(".input-box input")[0];
let passwordInput = document.querySelectorAll(".input-box input")[1];
let loginButton = document.querySelector(".btn");


loginButton.addEventListener("click", function (event) {
    event.preventDefault();

    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();

    
    if (username === "" || password === "") {
        alert("Please fill both Username and Password.");
        return;
    }

    
    if (!username.includes("@") && password.length < 6) {
        alert("Please enter a valid email/username and password must be at least 6 characters long.");
        return;
    }

    
    if (!username.includes("@")) {
        alert("Please enter a valid email/username.");
        return;
    }

    
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    
    alert("Logged in as " + username);
});