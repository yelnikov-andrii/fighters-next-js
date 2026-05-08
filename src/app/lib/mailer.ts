import nodemailer from "nodemailer";

// let transporter = nodemailer.createTransport({
//   host: process.env.SMPT_HOST,
//   port: process.env.SMPT_PORT,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: process.env.SMPT_USER,
//     pass: process.env.SMPT_PASSWORD,
//   },
// });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

async function send({
  email,
  subject,
  html,
}: {
  email: string;
  subject: string;
  html: string;
}) {
  console.log("send meil");
  return transporter.sendMail({
    from: "Authorization API",
    to: email,
    subject,
    text: "",
    html,
  });
}

async function sendActivationToken(code: string, email: string) {
  await send({
    email,
    subject: "Account activation",
    html: `
    <h1>Активація</h1>
    <div>Код для активації' акаунта - <b>${code}</b></div>
    `,
  });
}

export const mailer = {
  send,
  sendActivationToken,
};
