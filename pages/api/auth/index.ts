import {
  deleteAUserFromDb,
  getASingleUser,
  getAllUser,
  loginRegisterUser,
  registerAUser,
} from "@/lib/dbOperatons/users.prisma";
import { setCookie } from "cookies-next";
import jwt from "jsonwebtoken";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  message: string;
  dataCounted?: number;
  returnData?: {} | [] | null;
};

type LoggedDataSettingToCookie = {
  id: string;
  first__name: string;
  last__name: string;
  email__id: string | string[] | undefined;
  photo__URL: string;
  phone__numb: number;
  gender: string;
  role: string;
};

const userCrud = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    switch (req.method) {
      case "GET": {
        if (!req.query.id && !req.headers.email) {
          const getEveryUserExistOnTheDB = await getAllUser();
          if (!getEveryUserExistOnTheDB) {
            return res.status(404).json({
              success: false,
              message: `Data not  found`,
              returnData: [],
            });
          }
          return res.status(200).json({
            success: true,
            message: `Data found successfully`,
            returnData: getEveryUserExistOnTheDB,
          });
        } else if (req.query.id) {
          const { id } = req.query;
          const getAUserInfo = await getASingleUser(id as string);
          if (!getAUserInfo) {
            return res.status(404).json({
              success: false,
              message: `Data not  found according to this id ${id}`,
              returnData: {},
            });
          }
          return res.status(200).json({
            success: true,
            message: `Data found according to this id ${id}`,
            returnData: getAUserInfo,
          });
        } else if (req.headers) {
          const { email: email__id, password: clientPass } = req.headers;
          const loginWithExistingEmail = await loginRegisterUser(
            email__id as string
          );
          if (!loginWithExistingEmail) {
            return res.status(404).json({
              success: false,
              message: `No user found at this email ${email__id}, Please sign-up first`,
              returnData: {},
            });
          }
          const { password, ...rest } = loginWithExistingEmail || {};
          const verifyPassword = jwt.verify(
            password as string,
            process.env.ACCESS_TOKEN as string
          );
          if (clientPass !== verifyPassword) {
            return res.status(404).json({
              success: false,
              message: `Wrong credential`,
              returnData: {},
            });
          } else {
            const setUserToCookieByJWT = jwt.sign(
              rest,
              process.env.ACCESS_TOKEN as string
            );
            setCookie("u-auth", setUserToCookieByJWT, {
              req,
              res,
              maxAge: 25200,
              secure: process.env.NODE_ENV !== "development",
              httpOnly: true,
              sameSite: true,
              path: "/",
            });
          }
          return res.status(200).json({
            success: true,
            message: `User login successfully`,
            returnData: loginWithExistingEmail,
          });
        }
      }

      case "POST": {
        if (req.body) {
          const {
            first__name,
            last__name,
            email__id,
            password,
            photo__URL,
            gender,
            phone__numb,
          } = req.body;
          const hashedPass = jwt.sign(
            password,
            process.env.ACCESS_TOKEN as string
          );

          const registerUserToDB = await registerAUser({
            first__name,
            last__name,
            email__id,
            password: hashedPass,
            photo__URL,
            gender,
            phone__numb,
          });
          if (!registerUserToDB) {
            return res.status(422).json({
              success: false,
              message: `User creation failed`,
              returnData: {},
            });
          }
          const setUserToCookieByJWT = jwt.sign(
            {
              first__name,
              last__name,
              email__id,
              photo__URL,
              gender,
              phone__numb,
              role: "MEMBER",
            },
            process.env.ACCESS_TOKEN as string
          );
          setCookie("u-auth", setUserToCookieByJWT, {
            req,
            res,
            maxAge: 25200,
            secure: process.env.NODE_ENV !== "development",
            httpOnly: true,
            sameSite: true,
            path: "/",
          });
          return res.status(201).json({
            success: true,
            message: `User registered success`,
            returnData: registerUserToDB,
          });
        }
      }
      case "DELETE": {
        if (!req.query.id) {
          return res.status(400).json({
            success: false,
            message: "Bad request",
          });
        }

        const { id } = req.query;
        const deleteSingleUser = await deleteAUserFromDb(
          id as string | undefined
        );
        return res.status(200).json({
          success: true,
          message: `user delete successful with this id ${id}`,
          returnData: deleteSingleUser,
        });
      }

      default:
        break;
    }
  } catch (error) {
    return res.status(406).json({
      success: false,
      message: `error found ${error}`,
      returnData: null,
    });
  }
};

export default userCrud;
