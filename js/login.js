const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const wrapper = document.querySelector(".wrapper");
const loginTitle = document.querySelector(".title-login");
const registerTitle = document.querySelector(".title-register");
const signUpBtn = document.querySelector("#SignUpBtn");
const signInBtn = document.querySelector("#SignInBtn");

function loginFunction(){
    loginForm.style.left = "50%";
    loginForm.style.opacity = 1;
    registerForm.style.left = "150%";
    registerForm.style.opacity = 0;
    wrapper.style.height = "500px";
    loginTitle.style.top = "50%";
    loginTitle.style.opacity = 1;
    registerTitle.style.top = "50px";
    registerTitle.style.opacity = 0;
}

function registerFunction(){
    loginForm.style.left = "-50%";
    loginForm.style.opacity = 0;
    registerForm.style.left = "50%";
    registerForm.style.opacity = 1;
    wrapper.style.height = "580px";
    loginTitle.style.top = "-60px";
    loginTitle.style.opacity = 0;
    registerTitle.style.top = "50%";
    registerTitle.style.opacity = 1;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Login validation
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const logEmail = document.getElementById("log-email").value.trim();
    const logPass = document.getElementById("log-pass").value.trim();

    if (!emailPattern.test(logEmail)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (logPass.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    alert("Login successful!");
    this.submit(); // Proceed with form submission
});

// Register validation
registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const regName = document.getElementById("reg-name").value.trim();
    const regEmail = document.getElementById("reg-email").value.trim();
    const regPass = document.getElementById("reg-pass").value.trim();
    const agree = document.getElementById("agree").checked;

    if (regName === "") {
        alert("Username cannot be empty.");
        return;
    }

    if (!emailPattern.test(regEmail)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (regPass.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    if (!agree) {
        alert("You must agree to the terms and conditions.");
        return;
    }

    alert("Registration successful!");
    this.submit(); // Proceed with form submission
});
