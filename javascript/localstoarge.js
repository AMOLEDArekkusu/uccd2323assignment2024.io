
function saveToLocalStorage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formData = {
        name: name,
        email: email,
        message: message
    };

    localStorage.setItem('contactFormData', JSON.stringify(formData));
}

function loadFromLocalStorage() {
    const storedData = localStorage.getItem('contactFormData');
    if (storedData) {
        const formData = JSON.parse(storedData);
        document.getElementById('name').value = formData.name;
        document.getElementById('email').value = formData.email;
        document.getElementById('message').value = formData.message;
    }
}

window.addEventListener('load', loadFromLocalStorage);

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    saveToLocalStorage();
    console.log('Form submitted and data saved to local storage');
});

['name', 'email', 'message'].forEach(function(id) {
    document.getElementById(id).addEventListener('input', saveToLocalStorage);
});