
import nodemailer from "nodemailer";

export const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: "jyotipatel10304@gmail.com", 
      pass: "ijemcbdgxriwctfb", // Jo naya password aapne screenshot me dikhaya tha
    },
  });

  const mailOptions = {
    from: "jyotipatel10304@gmail.com",
    to: options.email,
    subject: "GYM WEBSITE CONTACT",
    text: `${options.message} \n\nSent by: ${options.userEmail}`,
  };

  await transporter.sendMail(mailOptions);
};