document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const response = grecaptcha.getResponse();
        
        if (response.length === 0) {
            alert('Please complete the reCAPTCHA.');
            return;
        }

        window.location.href = 'autoback_to_home.html';
    });
});