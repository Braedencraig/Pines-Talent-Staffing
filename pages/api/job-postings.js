/* eslint-disable import/no-anonymous-default-export */
const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    First Name: ${body.firstName}\r\n
    Last Name: ${body.firstName}\r\n
    Email: ${body.email}\r\n
    Phone: ${body.phone}\r\n
    Position: ${body.position}\r\n
    Salary Range: ${body.salaryRange}\r\n
    Start Date: ${body.startDate}\r\n
    LinkedIn Profile: ${body.linkedin}\r\n
  }`;

  await mail.send({
    to: "darcy@pinestalent.com",
    from: "darcy@pinestalent.com",
    subject: "Contact Us",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  });

  res.status(200).json({ status: "Ok" });
};
