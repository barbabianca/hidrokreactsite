/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const admin = require("firebase-admin");
const nodemailer = require('nodemailer');
const cors = require('cors');

admin.initializeApp();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'ukasikcioglu@gmail.com',
    pass: 'iovxglahevthrqzu'
  }
});

// Enable CORS for your function
exports.sendMailOverHTTP = functions.https.onRequest((req, res) => {
  // Use cors middleware to allow requests from localhost during development
  cors()(req, res, () => {
    const mailOptions = {
<<<<<<< HEAD
        from: `ukasikcioglu@gmail.com`,
        to: `ukasikcioglu@gmail.com`,
        subject: 'Email From Me to MySelf | Contact Form Message',
        html: `<h1>Contact Form Message</h1>
                            <p>
                               <b>Email: </b>${req.body.email}<br>
                               <b>Name: </b>${req.body.name}<br>
                                <b>Mobile: </b>${req.body.name}<br>
                               <b>Message: </b>${req.body.message}<br>
                            </p>`
=======
      from: `ukasikcioglu@YouWant.com`,
      to: `ukasikcioglu@gmail.com`,
      subject: 'Email From Me to MySelf | Contact Form Message',
      html: `<h1>Contact Form Message</h1>
              <p>
                <b>Email: </b>${req.body.email}<br>
                <b>Name: </b>${req.body.name}<br>
                <b>Subject: </b>${req.body.subject}<br>
                <b>Message: </b>${req.body.message}<br>
              </p>`
>>>>>>> d16635178cf12a95163cc3a48d9913e2b9fe4a81
    };

    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        return res.send(error.toString());
      }

      const responseData = JSON.stringify(data);
      return res.send(`Sent! ${responseData}`);
    });
  });
});
