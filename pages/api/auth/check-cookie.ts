import { hasCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const has = hasCookie("u-auth", { req, res });
  console.log(req);
  res.status(200).json({ name: "req.cookies", has });
}
