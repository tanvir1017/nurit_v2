import { getAUser, getAllUsers } from "@/lib/db/users";
import { DB_OPERATION_METHOD } from "@/util/types/types";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  message: string;
  data: {} | [];
};

const userCrud = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    switch (req.method) {
      case DB_OPERATION_METHOD.GET: {
        if (req.query.id) {
          const { id } = req.query;
          const getASingleUser = await getAUser(id);
          if (getASingleUser) {
            return res.status(200).json({
              success: true,
              message: "user",
              data: getASingleUser,
            });
          }
        }

        const getAllRegisterUser = await getAllUsers();
        return res.status(200).json({
          success: true,
          message: "user",
          data: getAllRegisterUser,
        });
      }

      default:
        break;
    }
  } catch (error) {
    console.log("error found");
  }
};

export default userCrud;
