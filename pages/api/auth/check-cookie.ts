import { getCookie, hasCookie } from "cookies-next";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
const login = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const has = hasCookie("__client_auth", { req, res });
    if (has) {
      const getCookieFromBrowser = getCookie("__client_auth", {
        req,
        res,
      });
      const verifiedToken = jwt.verify(
        getCookieFromBrowser as string,
        process.env.ACCESS_TOKEN as string
      );

      res.status(200).json({ verifiedToken });
    } else {
      res.status(200).json(null);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
export default login;
