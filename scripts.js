// JavaScript for handling contact form submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for reaching out, ' + name + '! We will get back to you soon.');
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
