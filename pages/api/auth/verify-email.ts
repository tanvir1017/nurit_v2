import { loginRegisterUser } from "@/lib/dbOperatons/users.prisma";
import jwt from "jsonwebtoken";
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
      const isExistUser = await loginRegisterUser(email as string);
      if (isExistUser) {
        return res
          .status(409)
          .json({ message: `User already exist with this email: ${email}` });
      }

      const jwtEmail = jwt.sign(email, process.env.ACCESS_TOKEN as string);
      sendEmail(email, jwtEmail);
      return res.status(200).json({ jwtEmail });
    } catch (error) {
      return res.status(404).json({ error: "something went wrong" });
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

function sendEmail(email: string, jwtEmail: string) {
  var Transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: EMAIL_ADDRESS, // put NurIT email
      pass: PASSWORD_, // put email pass
    },
  });

  var mailOptions;
  let sender = "NurIT-Institute";
  mailOptions = {
    from: sender,
    to: email,
    subject: "Verifying your email",
    html: `Press <a href=http://localhost:3000/auth/signing?token=${email}> here </a> to verify your email. Thanks`,
  };

  Transport.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("Message sent");
    }
  });
}
