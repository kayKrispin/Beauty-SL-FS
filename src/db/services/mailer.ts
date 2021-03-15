import dotenv from 'dotenv';
import { BasicObject, MailOptions } from '../types';

const nodemailer = require(`nodemailer`);

dotenv.config({ path: `.env.local` });

const transporter = nodemailer.createTransport({
  service: `gmail`,
  secure: false, // true
  port: 25, // 465
  auth: {
    user: process.env.GMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});

const verifyEmail = (mailOptions: MailOptions) =>
  transporter.sendMail(mailOptions, (error: Error, info: BasicObject) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });

export default verifyEmail;
