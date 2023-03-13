import {
  aSingleUserFunctionType,
  GetAllUserFunctionType,
  registerAUserFunctionType,
  registerBodyDataType,
} from "@/util/types/types";
import prisma from "../../prisma/lib/db.connector";

export const getASingleUser: aSingleUserFunctionType = async (id) => {
  const singleUser = await prisma.user.findUnique({
    where: { id },
  });
  return singleUser;
};

export const getAllUser: GetAllUserFunctionType = async () => {
  const users = await prisma.user.findMany({});
  return users;
};

export const registerAUser: registerAUserFunctionType = async ({
  first__name,
  last__name,
  email__id,
  password,
  photo__URL,
  gender,
  phone__numb,
}: registerBodyDataType) => {
  const user = await prisma.user.create({
    data: {
      first__name,
      last__name,
      email__id,
      password,
      photo__URL,
      gender,
      phone__numb,
    },
  });
  return user;
};

export const deleteAUserFromDb: aSingleUserFunctionType = async (id) => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
};
