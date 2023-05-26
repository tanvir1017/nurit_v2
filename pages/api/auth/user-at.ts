import {
  getASingleUserBasedOnUserName,
  loginRegisterUser,
} from "@/lib/dbOperators/users.prisma";
import { NextApiRequest, NextApiResponse } from "next";

const userAtThisEmailAndUsername = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
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
  } else if (req.query.username) {
    console.log(req.query.username);
    const { username } = req.query;
    const getAUserInfo = await getASingleUserBasedOnUserName(
      username as string
    );

    if (!getAUserInfo) {
      return res.status(404).json({
        success: false,
        message: `Data not  found according to this username ${username}`,
        returnData: {},
      });
    }
    return res.status(200).json({
      success: true,
      message: `Data found according to this username: ${username}`,
      returnData: getAUserInfo,
    });
  }
};
export default userAtThisEmailAndUsername;
