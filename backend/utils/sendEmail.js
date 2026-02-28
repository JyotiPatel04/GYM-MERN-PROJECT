import nodemailer from "nodemailer";

export const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, // Timeout ke liye port 465 try karte hain secure connection ke sath
    secure: true, 
    pool: true, // Connection ko zinda rakhne ke liye
    auth: {
      user: "jyotipatel10304@gmail.com",
      pass: "ijemcbdgxriwctfb", // Apna latest 16-digit App Password hi rakhein
    },
    tls: {
      rejectUnauthorized: false, // Security check bypass karne ke liye
    },
  });

  const mailOptions = {
    from: "jyotipatel10304@gmail.com",
    to: options.email,
    subject: options.subject,
    text: `${options.message} \n\nSent by: ${options.userEmail}`,
  };

  await transporter.sendMail(mailOptions);
};