/* eslint-disable comma-dangle */
// jshint esversion:8
const nodemailer = require('nodemailer');
const axios = require('axios').default;
const nodemailerMailgun = require('nodemailer-mailgun-transport');

const router = require('express').Router();

const routes = () => {
  
  router.route('/')
    .post((req, res) => {
      console.log(req.body);
          // Get request from req.body
    const {
      name,
      email,
      message,
      phone,
    } = req.body.formData;

    const captcha = req.body.token;

    if(!name || !email || !message || !phone || !captcha) {
      return res.status(422).json({
        status: 'failed',
        message: 'One or more parameters missing'
      });
    }

    // Post captcha to google
    axios.post('https://www.google.com/recaptcha/api/siteverify', {}, {
      params: {
        secret: '6LcGAGoaAAAAAEkH6fjRunf74v9nXaoJ9d0DwwHr',
        response: captcha
      }
    }).then((captchaResponse) => { // Get captcha response
      if (captchaResponse.data.success === true && captchaResponse.data.score >= 0.5 ) { // Send mail if captcha is successful
        const receipientEmail = 'enquiries@oatsville.com.ng';
        (async function sendMail() {
          const auth = {
            // Auth object
            auth: {
              api_key: process.env.MAILGUN_API_KEY,
              domain: process.env.MAILGUN_DOMAIN
            }
          };
          // Initialize nodemailer transporter
          const transporter = nodemailer.createTransport(nodemailerMailgun(auth));
          function transportMail(mailOptions, replyOption) {
            try { // Send mail with nodemailer transporter
              transporter.sendMail(mailOptions, (err, response) => {
                if (err) {
                  console.log('An error occured', err);
                  res.json({
                    status: 'Failed',
                    message: 'An error occured when trying to send message',
                    error: err
                  });
                }
                if (response) { // Send reply and handle response and error
                  transporter.sendMail(replyOption, (error) => {
                    if (error) {
                      debug('An error occured reply ', error);
                      res.json({
                        status: 'Failed',
                        message: 'An error occured in sending reply',
                        error
                      });
                    }
                  });
                  res.json({
                    status: 'Success',
                    message: 'Message successfully sent',
                    response
                  });
                }
                transporter.close();
              });
            } catch (err) {
              res.json(err);
            }
          }
          const mailOptions = { // Initialize mail options
            from: `Customer Reach Out ${email}`,
            to: receipientEmail,
            subject: 'Customer Reach Out',
            html: `
            <p>${message}</p>
            <br>
            <p>${name},<br>${phone},<br>${email}</p>
            `,
          };
          const replyOptions = { // Initialize reply option
            from: `OatsVille ${receipientEmail}`,
            to: email,
            subject: 'Thank You!',
            html: `
            <h1>Hello ${name}</h1>
            <p>Thank you for choosing and contacting Oatsville</p>
            <p>Your message has been received and you'll get a response within 24-48 hours.</p>
            <p>Regards,</p>
            <p>Oatsville.</p>
            `
          };
          // Call transportMail function
          transportMail(mailOptions, replyOptions);
        // eslint-disable-next-line no-console
        }()).catch(console.error);
      } else {
        res.send('Bots not allowed');
      }
    });
    });

  return router;
};

module.exports = routes;
