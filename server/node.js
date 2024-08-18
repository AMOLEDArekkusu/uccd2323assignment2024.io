const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('6LcfTScqAAAAAAktY2UREKh7i7pjlAbx0CX-ktI3', async (req, res) => {
    const { 'g-recaptcha-response': recaptchaResponse } = req.body;
    
    const secretKey = 'your_secret_key';
    const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
        params: {
            secret: secretKey,
            response: recaptchaResponse
        }
    });

    const data = response.data;

    if (data.success) {
       
        res.send('Form submitted successfully.');
    } else {

        res.send('reCAPTCHA verification failed. Please try again.');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
