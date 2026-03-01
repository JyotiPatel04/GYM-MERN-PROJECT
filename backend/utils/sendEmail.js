import nodemailer from "nodemailer";

export const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: options.email,
    subject: options.subject || "GYM WEBSITE CONTACT",
    text: `${options.message}\n\nSent by: ${options.userEmail}`,
  };

  await transporter.sendMail(mailOptions);
};
console.log("SMTP_MAIL:", process.env.SMTP_MAIL);
console.log("SMTP_PASS exists:", !!process.env.SMTP_PASSWORD);