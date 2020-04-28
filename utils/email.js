const nodemailer = require('nodemailer');

const sendEmail = (options) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: 'zoomi',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  //   await transporter.sendMail(mailOptions);
  return true;
};
module.exports = sendEmail;
