import {
  A__SingleModelFunctionType,
  GetAllUserFunctionType,
  LoginUserModelFunctionType,
  registerAUserFunctionType,
  registerBodyDataType,
} from "@/util/types/types";
import prisma from "../../prisma/lib/db.connector";

export const getASingleUser: A__SingleModelFunctionType = async (id) => {
  const singleUser = await prisma.user.findUnique({
    where: { id },
  });
  return singleUser;
};
export const loginRegisterUser: LoginUserModelFunctionType = async (
  email_address
) => {
  const singleUser = await prisma.user.findUnique({
    where: { email__id: email_address },
  });
  return singleUser;
};

export const getAllUser: GetAllUserFunctionType = async () => {
  const totalUser = await prisma.user.count();
  const users = await prisma.user.findMany({});
  return { users, totalUser };
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

export const updateUserFromDb = async (id: string, updatedData: any) => {
  const user = await prisma.user.update({
    where: {
      id: id,
    },
    data: { ...updatedData },
  });
  return user;
};

export const deleteAUserFromDb: A__SingleModelFunctionType = async (id) => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
};
