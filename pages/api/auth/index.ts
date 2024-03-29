import {
  deleteAUserFromDb,
  getASingleUser,
  getAllUser,
  registerAUser,
  updateUserFromDb,
} from "@/lib/dbOperators/users.prisma";
import { DB_OPERATION_METHOD, Data, bodyDataType } from "@/util/types/types";
import { setCookie } from "cookies-next";
import jwt from "jsonwebtoken";
import type { NextApiRequest, NextApiResponse } from "next";

const userCrud = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    switch (req.method) {
      case DB_OPERATION_METHOD.GET: {
        if (req.query.id) {
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
        } else {
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
        }
      }

      case DB_OPERATION_METHOD.POST: {
        console.log("From signing", req.method);
        if (req.body) {
          console.log(req.body);
          const {
            first__name,
            last__name,
            username,
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
            username,
            password: hashedPass,
            photo__URL,
            gender,
            phone__numb,
          });

          console.log("registerUserToDB", registerUserToDB);
          if (!registerUserToDB) {
            return res.status(422).json({
              success: false,
              message: `User creation failed`,
              returnData: { action: `User creation failed` },
            });
          }
          const { id } = registerUserToDB as bodyDataType;
          const setUserToCookieByJWT = jwt.sign(
            { id, email__id, role: "STUDENT" },
            process.env.ACCESS_TOKEN as string
          );
          setCookie("__client_auth", setUserToCookieByJWT, {
            req,
            res,
            maxAge: 604800,
            secure: process.env.NODE_ENV !== "development",
            httpOnly: true,
            sameSite: true,
            path: "/",
          });
          return res.status(201).json({
            success: true,
            message: `User registered success`,
            returnData: { action: `User registered success` },
          });
        }
      }
      case DB_OPERATION_METHOD.PUT: {
        if (!req.body.id) {
          return res.status(400).json({
            success: false,
            message: "Bad request",
            returnData: { action: "Bad request" },
          });
        }

        const { id, ...rest } = req.body;
        const updateUser = await updateUserFromDb(id as string, rest);
        if (!updateUser) {
          return res.status(500).json({
            success: false,
            message: `Something went wrong when try to update user info `,
            returnData: {
              action: `Something went wrong when try to update user info `,
            },
          });
        } else {
          return res.status(200).json({
            success: true,
            message: `user updated successful with this user id ${id}`,
            returnData: {
              action: `user updated successful`,
            },
          });
        }
      }
      case DB_OPERATION_METHOD.DELETE: {
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
        return res.status(500).json({
          success: false,
          message: `internal server error. The message came from the [DEFAULT 🥲] switch case method`,
          returnData: { action: `internal server error` },
        });
    }
  } catch (error) {
    console.log(error);
    return res.status(406).json({
      success: false,
      message: `error found `,
      returnData: { action: error },
    });
  }
};

export default userCrud;
