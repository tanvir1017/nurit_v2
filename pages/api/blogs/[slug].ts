import { NextApiRequest, NextApiResponse } from "next";

export default async function Slug(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send({
    check: "hello",
  });
}
