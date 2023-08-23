/* eslint-disable import/no-anonymous-default-export */
const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Subject: ${body.subject}\r\n
  Message: ${body.message}\r\n
`;

  await mail.send({
    to: "darcy@pinestalent.com",
    from: "darcy@pinestalent.com",
    subject: "Contact Us",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  });

  res.status(200).json({ status: "Ok" });
};
