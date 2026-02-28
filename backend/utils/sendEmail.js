import nodemailer from "nodemailer";

export const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // 587 ke liye false hona chahiye
    auth: {
      user: "jyotipatel10304@gmail.com",
      pass: "ijemcbdgxriwctfb", 
    },
    tls: {
      rejectUnauthorized: false // Security handshake error se bachane ke liye
    }
  });

  const mailOptions = {
    from: "jyotipatel10304@gmail.com",
    to: options.email,
    subject: "GYM WEBSITE CONTACT",
    text: `${options.message} \n\nSent by: ${options.userEmail}`,
  };

  await transporter.sendMail(mailOptions);
};