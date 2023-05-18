import {
  findAUserBasedOnId,
  updateUserPasswordFromDb,
} from "@/lib/dbOperatons/users.prisma";
import { DB_OPERATION_METHOD, bodyDataType } from "@/util/types/types";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

export default async function updatePassword(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === DB_OPERATION_METHOD.PUT) {
    const { id, password: prevPass, password_new } = req.body;
    const checkUserPrev_Password = await findAUserBasedOnId(id);

    const { password } = checkUserPrev_Password as bodyDataType;
    const verifyPassword = jwt.verify(
      password,
      process.env.ACCESS_TOKEN as string
    );
    if (verifyPassword !== prevPass) {
      return res.status(422).json({
        success: false,
        message: `Password didn't match with your previous password`,
        returnData: { action: "password didn't matched" },
      });
    } else {
      if (verifyPassword !== password_new) {
        const setNewPassword = jwt.sign(
          password_new,
          process.env.ACCESS_TOKEN as string
        );
        const updateUser = await updateUserPasswordFromDb(id, setNewPassword);
        if (!updateUser) {
          return res.status(500).json({
            success: false,
            message: `Something went wrong when try to change your  password `,
            returnData: { action: "unauthorized" },
          });
        } else {
          return res.status(201).json({
            success: true,
            message: `password changes successful`,
            returnData: { action: "Password changed" },
          });
        }
      }
      return res.status(422).json({
        success: false,
        message: `New password should not be the same as previous password`,
        returnData: { action: "unauthorized" },
      });
    }
  }
}
