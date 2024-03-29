import { loginRegisterUser } from "@/lib/dbOperators/users.prisma";
import { Data, bodyDataType } from "@/util/types/types";
import { setCookie } from "cookies-next";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (req.method === "POST") {
      console.log(req.method);
      const { email: email_address, password: clientPass } = req.body;

      const loginWithExistingEmail: bodyDataType = await loginRegisterUser(
        email_address as string
      );

      if (!loginWithExistingEmail) {
        return res.status(404).json({
          success: false,
          message: `No user found at this email ${email_address}, Please sign-up first`,
          returnData: {},
        });
      } else {
        const { email__id, password, role, id } = loginWithExistingEmail;
        const verifyPassword = jwt.verify(
          password as string,
          process.env.ACCESS_TOKEN as string
        );

        if (clientPass !== verifyPassword) {
          return res.status(401).json({
            success: false,
            message: `Wrong credential`,
            returnData: {},
          });
        } else {
          const setUserToCookieByJWT = jwt.sign(
            {
              id,
              email__id,
              role,
            },
            process.env.ACCESS_TOKEN as string
          );
          setCookie("__client_auth", setUserToCookieByJWT, {
            req,
            res,
            maxAge: 604800,
            secure: process.env.NODE_ENV !== "development",
            httpOnly: true,
            sameSite: "lax",
            path: "/",
          });
          res.status(200).json({
            success: true,
            message: `User login successfully`,
            returnData: { action: `User logged in` },
          });
        }
      }
    } else {
      return res.status(406).json({
        success: false,
        message: `${req.method} is not acceptable! Thanks`,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: `Something went wrong ${error}`,
    });
  }
}
