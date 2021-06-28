const nodemailer = require('nodemailer');

const host = process.env.SMTP_HOST;
const port = process.env.SMTP_PORT;
const user = process.env.SMTP_USERNAME;
const pass = process.env.SMTP_PASSWORD;

let transport = nodemailer.createTransport({
  host,
  port,
  auth: {
    user,
    pass,
  }
});

async function sendWelcomeEmail(email, name) {
  const subject = 'You have successfully registered on PREVENT';
  const html = 
  `
		Dear <strong>${name}</strong>,
    <br>
    <br>
		You have succesffuly registered to PREVENT.
    <br>
    <br>
		Best,
		PREVENT
	`;

  return await sendEmail(email, subject, html);
}

async function sendResetPasswordRequestEmail(email, name, url) {
  const subject = 'You have requested password reset on PREVENT';
  const html = 
  `
		Dear <strong>${name}</strong>,
    <br>
    <br>
		Follow link to reset password: <a href="${url}" target="_blank"> RESET PASSWORD</a>
    <br>
    <br>
		Best,
		PREVENT
	`;

  return await sendEmail(email, subject, html);
}

async function sendResetPasswordEmail(email, name, url) {
  const subject = 'You have successfully reseted password on PREVENT';
  const html = 
  `
		Dear <strong>${name}</strong>,
    <br>
    <br>
    You have successfully reseted password on PREVENT
		Follow link to login: <a href="${url}" target="_blank">LOG IN</a>
    <br>
    <br>
		Best,
		PREVENT
	`;

  return await sendEmail(email, subject, html);
}

async function sendEmail(to, subject, html) {
  return transport.sendMail({
    from: '"PREVENT" <admin@prevent.io>',
    to,
    subject,
    html,
  });
}

module.exports = {
  sendWelcomeEmail,
  sendResetPasswordRequestEmail,
  sendResetPasswordEmail,
}

