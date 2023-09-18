const subscribeButton = document.getElementById("subscribeButton");
const popup = document.getElementById("popup");
const dismissButton = document.getElementById("dismissButton");
const emailInput = document.getElementById("email");
const confirmationEmail = document.getElementById("confirmationEmail");

subscribeButton.addEventListener("click", () => {
    const enteredEmail = emailInput.value;

    // Perform email validation here
    if (isValidEmail(enteredEmail)) {
        confirmationEmail.textContent = enteredEmail;
        popup.style.display = "block";
    } else {
        // Display an error message or take appropriate action
        alert("Please enter a valid email address.");
    }
});

dismissButton.addEventListener("click", () => {
    popup.style.display = "none";
});

// Function to validate email
function isValidEmail(email) {
    // You can use a regular expression or other validation methods here
    // For a basic example, we'll check if the email contains "@" and "."
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
