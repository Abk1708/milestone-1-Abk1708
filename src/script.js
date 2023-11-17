const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");

// Set initial state
if (localStorage.getItem("darkMode") === "true") {
    document.getElementById("dark-mode-checkbox").checked = true;
    document.body.classList.add("dark-mode");
}

// Dark mode toggle
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    if (!document.getElementById("dark-mode-checkbox").checked) {
        localStorage.setItem("darkMode", false);
    } else {
        localStorage.setItem("darkMode", true);
    }
};

// hamburger button
const mobileMenu = () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
};

hamburger.addEventListener("click", mobileMenu);

// form validation in the form of alert after pressing submit button
const formValidation = () => {
    if (
        userName.value === "" ||
        email.value === "" ||
        phoneNumber.value === ""
    ) {
        alert("Please fill all required information");
        return false;
    }

    alert(
        "Credential submitted. Thank you for registering. A confirmation email will be sent to your registered account."
    );
    return true;
};
