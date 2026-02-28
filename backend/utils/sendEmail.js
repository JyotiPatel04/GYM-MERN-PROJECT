import nodemailer from "nodemailer";

export const sendEmail = async (options) => {
  // Humne variables ki jagah direct values daal di hain taaki Render koi galti na kare
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // 587 port ke liye hamesha false rahega
    auth: {
      user: "jyotipatel10304@gmail.com", 
      pass: "negnnjlsairbepjt", 
    },
    tls: {
    rejectUnauthorized: false // Ye line add kar dein, isse connection fail nahi hoga
  }
  });

  const mailOptions = {
    from: "jyotipatel10304@gmail.com",
    to: options.email,
    subject: options.subject,
    text: `${options.message} \n\nEmail of User Who Sent The Message: ${options.userEmail}`,
  };

  await transporter.sendMail(mailOptions);
};