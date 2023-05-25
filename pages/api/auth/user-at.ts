import { loginRegisterUser } from "@/lib/dbOperatons/users.prisma";
import { NextApiRequest, NextApiResponse } from "next";

const userAtThisEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.email) {
    const { email } = req.query;
    const getAUserInfo = await loginRegisterUser(email as string);

    if (!getAUserInfo) {
      return res.status(404).json({
        success: false,
        message: `Data not  found according to this email ${email}`,
        returnData: {},
      });
    }
    return res.status(200).json({
      success: true,
      message: `Data found according to this email ${email}`,
      returnData: getAUserInfo,
    });
  }
};
export default userAtThisEmail;
