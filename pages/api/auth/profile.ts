import { loginRegisterUser } from "@/lib/dbOperators/users.prisma";
import { bodyDataType } from "@/util/types/types";
import { getCookie, hasCookie } from "cookies-next";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

// client auth cookie data type
interface Verify__client_authType {
  id: string;
  email__id: string;
  role: string;
  iat: number;
}

// This is just response data type
type ResponseType = {
  success: boolean;
  message: string;
  returnData: bodyDataType | { action: string };
};

const profile = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  try {
    // First check if user exist on cookie. Then simply get the user cookie and parse it by jwt token
    const findE_mailFromCookie = hasCookie("__client_auth", { req, res });

    // if user exist then getting the user data from cookie if not exist then returning the belows response to the client
    if (!findE_mailFromCookie) {
      res.status(404).json({
        success: false,
        message: `You are not logged or signed in 😐.`,
        returnData: { action: "User not signed in" },
      });
    } else {
      // This else blocks indicate that user actually exist on cookie, after that we are just get the cookie data
      const get__client_authFromCookie = getCookie("__client_auth", {
        req,
        res,
      });
      // Parsing OR verifying cookie's data by jwt token
      const verify__client_auth = jwt.verify(
        get__client_authFromCookie as string,
        process.env.ACCESS_TOKEN as string
      );
      // Extract just email__id only for requesting the user who hold this email
      const { email__id } = verify__client_auth as Verify__client_authType;

      // Calling the controller, and passing the emil
      const findUserBasedOnEmail = await loginRegisterUser(email__id);

      if (!findUserBasedOnEmail) {
        res.status(404).json({
          success: false,
          message: `No user found at this email ${email__id}.`,
          returnData: findUserBasedOnEmail,
        });
      }
      return res.status(200).json({
        success: true,
        message: `User founded at this email ${email__id}`,
        returnData: findUserBasedOnEmail,
      });
    }
  } catch (err) {
    // If we would get some trouble the try catch error simply grave the error and return from catch block
    return res.status(500).json({
      success: false,
      message: `Internal server error ☹️`,
      returnData: {
        action: `Error came from catch block & the error is ${err}`,
      },
    });
  }
};
export default profile;
