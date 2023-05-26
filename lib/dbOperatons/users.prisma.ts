import {
  A__SingleModelFunctionType,
  GetAllUserFunctionType,
  LoginUserModelFunctionType,
  bodyDataType,
  registerAUserFunctionType,
} from "@/util/types/types";
import prisma from "../../prisma/prisma/db.connector";

export const getASingleUser: A__SingleModelFunctionType = async (id) => {
  const singleUser = await prisma.user.findUnique({
    where: { id },
  });
  return singleUser;
};
// export const getASingleUserBasedOnUserName = async (username: string) => {
//   const singleUser = await prisma.users.findUnique({
//     where: {
//       username: username,
//     },
//     include: {
//       postedBlogs: true,
//     },
//   });
//   return singleUser;
// };
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
// change user to users but not fixed the error here
export const registerAUser: registerAUserFunctionType = async ({
  first__name,
  last__name,
  username,
  email__id,
  password,
  photo__URL,
  gender,
  phone__numb,
}: bodyDataType) => {
  const data = {
    first__name,
    last__name,
    username,
    email__id,
    password,
    photo__URL,
    gender,
    phone__numb,
  };
  const user = await prisma.user.create({
    data: data,
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
export const updateUserPasswordFromDb = async (
  id: string,
  password: string
) => {
  const user = await prisma.user.update({
    where: {
      id: id,
    },
    data: { password },
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
