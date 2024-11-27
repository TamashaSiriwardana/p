const nodemailer = require("nodemailer");

// Configure the transporter
const transporter = nodemailer.createTransport({
  service: "siriwardanatamasha9@gmail.com", // Use your email service (e.g., Gmail, Outlook, etc.)
  auth: {
    user: "siriwardanatamasha9@gmail.com", // Replace with your email
    pass: "", // Replace with your email password or app-specific password
  },
});

// Function to send an email
const sendEmail = async (to, subject, message) => {
  try {
    const mailOptions = {
      from: '"Your Name" <siriwardanatamasha9@gmail.com>',
      to: to,
      subject: subject,
      text: message,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// Example usage
sendEmail("recipient-email@example.com", "Test Email", "Hello, this is a test email sent using Nodemailer!");
