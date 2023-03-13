import {
  deleteAUserFromDb,
  getASingleUser,
  getAllUser,
  registerAUser,
} from "@/lib/db/users.prisma";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  message: string;
  dataCounted?: number;
  returnData?: {} | [] | null;
};

const userCrud = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    switch (req.method) {
      case "GET": {
        if (req.query.id) {
          const { id } = req.query;
          const getAUserInfo = await getASingleUser(id);
          if (!getAUserInfo) {
            return res.status(404).json({
              success: false,
              message: `Data not  found according to this id ${id}`,
              returnData: {},
            });
          }
          return res.status(200).json({
            success: true,
            message: `Data found according to this id ${id}`,
            returnData: getAUserInfo,
          });
        } else {
          const getEveryUserExistOnTheDB = await getAllUser();
          if (!getEveryUserExistOnTheDB) {
            return res.status(404).json({
              success: false,
              message: `Data not  found`,
              returnData: [],
            });
          }
          return res.status(200).json({
            success: true,
            message: `Data found successfully`,
            returnData: getEveryUserExistOnTheDB,
          });
        }
      }

      case "POST": {
        if (req.body) {
          const {
            first__name,
            last__name,
            email__id,
            password,
            photo__URL,
            gender,
            phone__numb,
          } = req.body;
          const registerUserToDB = await registerAUser({
            first__name,
            last__name,
            email__id,
            password,
            photo__URL,
            gender,
            phone__numb,
          });
          if (!registerUserToDB) {
            return res.status(422).json({
              success: false,
              message: `User creation failed`,
              returnData: {},
            });
          }

          return res.status(201).json({
            success: true,
            message: `User registered success`,
            returnData: registerUserToDB,
          });
        }
      }
      case "DELETE": {
        if (!req.query.id) {
          return res.status(400).json({
            success: false,
            message: "Bad request",
          });
        }

        const { id } = req.query;
        const deleteSingleUser = await deleteAUserFromDb(id);
        return res.status(200).json({
          success: true,
          message: `user delete successful with this id ${id}`,
          returnData: deleteSingleUser,
        });
      }

      default:
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

export default userCrud;
