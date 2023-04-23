import { getAllUser } from "@/lib/dbOperatons/users.prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Slug(req: NextApiRequest, res: NextApiResponse) {
  const user = await getAllUser();
  return res.status(200).send({
    user,
  });
}
