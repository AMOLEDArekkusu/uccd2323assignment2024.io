// Function to set a cookie
function setCookie(name, value, days) {
    const domain = '.discovermalysiauccd2323.azurewebsites.net'; // Notice the leading dot
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/; domain=" + domain;
}

// Function to get a cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to save form data to cookies
function saveToCookies() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    setCookie('contactFormName', name, 7);  // Cookie expires in 7 days
    setCookie('contactFormEmail', email, 7);
    setCookie('contactFormMessage', message, 7);
}

// Function to load form data from cookies
function loadFromCookies() {
    const name = getCookie('contactFormName');
    const email = getCookie('contactFormEmail');
    const message = getCookie('contactFormMessage');

    if (name) document.getElementById('name').value = name;
    if (email) document.getElementById('email').value = email;
    if (message) document.getElementById('message').value = message;
}

// Load data when the page loads
window.addEventListener('load', loadFromCookies);

// Save data when the form is submitted
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    saveToCookies();
    // You can add your form submission logic here
    console.log('Form submitted and data saved to cookies');
});

// Save data when input fields change
['name', 'email', 'message'].forEach(function(id) {
    document.getElementById(id).addEventListener('input', saveToCookies);
});