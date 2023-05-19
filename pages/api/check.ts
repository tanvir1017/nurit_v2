import { getASingleUserBasedOnUserName } from "@/lib/dbOperatons/users.prisma";
import { NextApiRequest, NextApiResponse } from "next";

const check = async (req: NextApiRequest, res: NextApiResponse) => {
  const seeData = await getASingleUserBasedOnUserName(
    "TanvirHossain_1882df7d3db03b75b"
  );
  res.status(404).json({
    message: seeData,
  });
};

export default check;
