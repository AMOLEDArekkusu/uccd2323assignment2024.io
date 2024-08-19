
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

function saveToCookies() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    setCookie('contactFormName', name, 7);  // Cookie expires in 7 days
    setCookie('contactFormEmail', email, 7);
    setCookie('contactFormMessage', message, 7);
}


function loadFromCookies() {
    const name = getCookie('contactFormName');
    const email = getCookie('contactFormEmail');
    const message = getCookie('contactFormMessage');

    if (name) document.getElementById('name').value = name;
    if (email) document.getElementById('email').value = email;
    if (message) document.getElementById('message').value = message;
}

window.addEventListener('load', loadFromCookies);

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    saveToCookies();
    console.log('Form submitted and data saved to cookies');
});

['name', 'email', 'message'].forEach(function(id) {
    document.getElementById(id).addEventListener('input', saveToCookies);
});