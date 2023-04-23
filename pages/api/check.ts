import { NextApiRequest, NextApiResponse } from "next";

export default async function Slug(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).send({
    check: "hello",
  });
}
