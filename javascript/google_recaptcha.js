document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const response = grecaptcha.getResponse();
        
        if (response.length === 0) {
            alert('Please complete the reCAPTCHA.');
            return;
        }
        
        // If reCAPTCHA is completed, you can proceed with form submission
        // Here, we'll simulate a form submission and redirect to the thank-you page
        
        // In a real-world scenario, you would send the form data to your server here
        // using fetch() or XMLHttpRequest
        
        // For this example, we'll just redirect to the thank-you page
        window.location.href = 'autoback_to_home.html';
    });
});