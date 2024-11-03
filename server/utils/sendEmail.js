const nodemailer = require("nodemailer");

const sendMail = async ({ userEmail, subject, text }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: userEmail,
    to: process.env.EMAIL,
    subject,
    text,
  });
  return info;
};

module.exports = sendMail;