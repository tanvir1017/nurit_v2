import { deleteCookie, hasCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";
const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "DELETE") {
    const has = hasCookie("__client_auth", { req, res });
    if (!has) {
      res.status(200).json({ token: "NOT FOUND" });
    } else {
      const deleteCookieFromBrowser = deleteCookie("__client_auth", {
        req,
        res,
      });
      res.status(200).json({ logout: "successful", deleteCookieFromBrowser });
    }
  } else {
    res.status(403).json({ warn: "unAuthorized" });
  }
};
export default logout;
