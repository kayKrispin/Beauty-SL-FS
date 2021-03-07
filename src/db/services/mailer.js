import dotenv from 'dotenv';

const nodemailer = require('nodemailer');

dotenv.config({ path: '.env.local' });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false, // true
  port: 25, // 465
  auth: {
    user: process.env.GMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export const verifyEmail = (mailOptions) =>
  transporter.sendMail(mailOptions, (error, info) => {
    console.log(mailOptions)
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
