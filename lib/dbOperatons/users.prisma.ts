import {
  A__SingleModelFunctionType,
  GetAllUserFunctionType,
  LoginUserModelFunctionType,
  bodyDataType,
  registerAUserFunctionType,
} from "@/util/types/types";
import prisma from "../../prisma/prisma/db.connector";
import { generateRandomId } from "../generateRandomNumber";

export const getASingleUser: A__SingleModelFunctionType = async (id) => {
  const singleUser = await prisma.user.findUnique({
    where: { id },
    include: {
      postedBlogs: true,
    },
  });
  return singleUser;
};
export const getASingleUserBasedOnUserName = async (username: string) => {
  const singleUser = await prisma.user.findUnique({
    where: { user__name: username },
    include: {
      postedBlogs: true,
    },
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
}: bodyDataType) => {
  const user = await prisma.user.create({
    data: {
      first__name,
      user__name: generateRandomId(`${first__name}${last__name}`),
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

export const findAUserBasedOnId: A__SingleModelFunctionType = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
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
