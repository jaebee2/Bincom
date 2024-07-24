document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Clear previous messages
        const previousMessages = document.querySelectorAll('.form-message');
        previousMessages.forEach(function(message) {
            message.remove();
        });

        // Retrieve form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate form data
        if (!name || !email || !message) {
            displayMessage('All fields are required.', 'error');
            return;
        }

        if (!validateEmail(email)) {
            displayMessage('Please enter a valid email address.', 'error');
            return;
        }

        // If form data is valid
        displayMessage(`Thank you for your message, ${name}!`, 'success');

        // Optionally, send data to a server
        // sendFormData({ name, email, message });

        // Clear form fields after successful submission
        form.reset();
    });

    // Function to display messages
    function displayMessage(msg, type) {
        const messageElem = document.createElement('div');
        messageElem.classList.add('form-message', type);
        messageElem.textContent = msg;
        form.appendChild(messageElem);

        // Remove the message after 5 seconds
        setTimeout(function() {
            messageElem.remove();
        }, 5000); // 5000 milliseconds = 5 seconds
    }

    // Function to validate email address format
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }

   
});
setTimeout(function() {
    messageElem.classList.add('fade-out');
    setTimeout(function() {
        messageElem.remove();
    }, 500); // 500 milliseconds for the fade-out transition
}, 5000); // 5000 milliseconds = 5 seconds
