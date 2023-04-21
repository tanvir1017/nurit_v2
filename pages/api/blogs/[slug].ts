import { NextApiRequest, NextApiResponse } from "next";

export default async function slug(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send({
    check: "hello",
  });
}
