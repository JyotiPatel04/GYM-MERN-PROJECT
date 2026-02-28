import nodemailer from "nodemailer";

export const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // 587 ke liye false zaruri hai
    auth: {
      user: "jyotipatel10304@gmail.com",
      pass: "rytagjwrsyvacsuu", 
    },
    tls: {
      rejectUnauthorized: false // Connectivity issues fix karne ke liye
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

