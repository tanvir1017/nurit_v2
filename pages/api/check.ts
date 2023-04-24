import prisma from "@/prisma/prisma/db.connector";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Slug(req: NextApiRequest, res: NextApiResponse) {
  const user = await prisma.iTCOURSE.findMany({});
  return res.status(200).send({
    user,
  });
}
