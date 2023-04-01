import { loginRegisterUser } from "@/lib/dbOperatons/users.prisma";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

let EMAIL_ADDRESS = process.env.EMAIL;
let PASSWORD_ = process.env.PASS;

const send_emailDestination =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://nuritinstitute.vercel.app";

type ResData = {
  success: boolean;
  message: string;
  returnData?: string | {} | [] | null;
};

export default async function verifyEmail(
  req: NextApiRequest,
  res: NextApiResponse<ResData>
) {
  if (req.method === "POST") {
    try {
      const { email } = req.body;
      const isExistUser = await loginRegisterUser(email as string);
      if (isExistUser) {
        return res.status(409).json({
          success: false,
          message: `User already exist with this email: ${email}`,
        });
      }

      const jwtEmail = jwt.sign(email, process.env.ACCESS_TOKEN as string);
      sendEmail(email, jwtEmail, res);
      return res.status(200).json({
        success: true,
        message: `We've send a mail to this email: ${email}`,
        returnData: jwtEmail,
      });
    } catch (error) {
      return res
        .status(404)
        .json({ success: false, message: "something went wrong" });
    }
  }
  return res.status(404).json({
    success: false,
    message: "Not acceptable",
    returnData: "Un authorized",
  });
}

function sendEmail(email: string, jwtEmail: string, res: any) {
  var Transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: EMAIL_ADDRESS, // put NurIT email
      pass: PASSWORD_, // put email pass
    },
  });

  let mailOptions;
  mailOptions = {
    from: EMAIL_ADDRESS,
    to: email,
    subject: "Verifying your email",
    html: `
      <head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;700&display=swap');
      body {
        background-color: rgb(231, 234, 236);
        font-family: "Hind Siliguri", sans-serif;
        max-width: 800vw;
        margin: 0 auto;
      }
      .wrapper {
        padding: 40px;
      }
      .brand-item {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .after-logo-text {
        margin-bottom: 50px;
        font-size: 2rem;
        font-weight: bolder;
        text-align: center;
      }
      .brand-item p {
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 0px;
      }
      .brand-logo {
        margin-right: 20px;
        width: 100px;
      }
      .social {
        display: flex;
        justify-content: center;
        margin-left: -80px;
        text-align: center;
      }
      .social-icon {
        text-align: center;
        margin-left: 10px;
      }
      .social-icon img {
        width: 20px;
        margin-right: 6px;
      }
      .container {
        background-color: white;
        max-width: 800px;
        border-radius: 35px;
        margin: 0 auto;
        padding: 10px;
        overflow: hidden;
      }
      .verify-img{
        display: grid;
        place-items: center;
      }
      .verify-img img {
        width: 50%;
        height: auto;
        text-align: center;
      }
      .verify-btn {
        font-weight: 700;
        border: transparent;
        padding: 0.8rem 2.8rem;
        border-radius: 10px;
        cursor: pointer;
        background-color: #ff0912;
        box-shadow: 0 4px 12px 0 rgba(228, 103, 103, 0.986);
        color: #fff;
        margin: 10px 0px;
      }
      .container-item{
      text-align: center;
      }
    </style>
  </head>
  

  <body>
    <div class="wrapper">
      <div class="brand-item">
        <img
          class="brand-logo"
          src="https://res.cloudinary.com/djbcnjkin/image/upload/v1680281219/nurit-institute_v2/brand-thins/trlmdlhsnvqtkmmzjc7v.png"
          alt="brand-logo NurIT-institute.com"
        />
        <div>
          <p><span style="color: #ff2c45">নুর-আইটি</span> ইনস্টিটিউট</p>
          <div class="social">
            FOLLOW US
            <div class="social-icon">
              <img
                src="https://img.icons8.com/fluency/48/null/facebook-new.png"
              />
              <img
                src="https://img.icons8.com/color/48/null/linkedin-2--v1.png"
              />
              <img src="https://img.icons8.com/fluency/48/null/twitter.png" />
            </div>
          </div>
        </div>
      </div>
      <p class="after-logo-text">Hi there!</p>

      <div class="container">
        <div class="container-item">
          <h1>Verify it's you</h1>
          <p>
            You're almost there. Just click below to complete
            <br />
            your Registration process
          </p>
          
            <button class="verify-btn">
              <a style="text-decoration: none; color: white;"  href=${send_emailDestination}/auth/signing?token=${email}> verify email
              </a>
              </button>
        </div>
        <div class="verify-img">
          <img
          
          src="https://res.cloudinary.com/djbcnjkin/image/upload/v1680281898/nurit-institute_v2/brand-thins/kkgsvxcphxgfz7b7v2hc.avif"
          alt="email Verification, that verify it's you"
        />
        </div>
      </div>
    </div>
  </body>`,
  };

  Transport.sendMail(mailOptions, function (error, response) {
    if (error) {
      return error;
    } else {
      console.log("Message sent");
      return "message sent";
    }
  });
}
