const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.email",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAILER_ADRESS,
    pass: process.env.MAILER_PWD,
  },
});

const sendJobApplicationEmail = async (userEmail, jobTitle, userName) => {
  const subject = "Job Application Confirmation";
  const message = `Hi ${userName},\n\nThank you for applying for the position of ${jobTitle}. Your application has been received.\n\nBest regards,\nThe Hiring Team`;

  try {
    const info = await transporter.sendMail({
      from: `"Jobify Team👻" <${process.env.MAILER_ADRESS}>`,
      to: userEmail,
      subject: subject,
      text: message,
    });
    return true;

  } catch (error) {

    return false;
  }
};

module.exports = sendJobApplicationEmail;