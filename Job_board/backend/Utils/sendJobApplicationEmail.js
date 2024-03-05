const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  // SMTP transporter configuration be set later
});

const sendJobApplicationEmail = async (userEmail, jobTitle, userName) => {
  const subject = "Job Application Confirmation";
  const message = `Hi ${userName},\n\nThank you for applying for the position of ${jobTitle}. Your application has been received.\n\nBest regards,\nThe Hiring Team`;

  try {
    const info = await transporter.sendMail({
      from: "",
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