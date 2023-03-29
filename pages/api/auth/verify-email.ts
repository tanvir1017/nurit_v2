import { NextApiRequest, NextApiResponse } from "next";

import nodemailer from "nodemailer";

let EMAIL_ADDRESS = process.env.EMAIL;
let PASSWORD_ = process.env.PASS;

export default async function verifyEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { email } = req.body;
      sendEmail(email);
      return res.status(200).json({ email });
    } catch (error) {
      console.log(error);
    }
  }
  return res.status(404).json({ message: "Not acceptable" });
}

function randomString() {
  const len = 10;
  let randomStr = "";
  for (let i = 0; i < len; i++) {
    const ch = Math.floor(Math.random() * 10);
    randomStr += ch;
  }
  return randomStr;
}

function sendEmail(email: string) {
  var Transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: EMAIL_ADDRESS, // put nurit email
      pass: PASSWORD_, // put email pass
    },
  });

  var mailOptions;
  let sender = "NurIT-Institute";
  mailOptions = {
    from: sender,
    to: email,
    subject: "Verifying your email",
    html: `Press <a href=http://localhost:3000/auth/signing?email=${email}> here </a> to verify your email. Thanks`,
  };

  Transport.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("Message sent");
    }
  });
}
