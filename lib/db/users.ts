import { GetASingleUserFunctionType } from "@/util/types/types";
import prisma from "../../prisma/lib/db.connector";

export const registerUser = async ({
  name,
  email,
  birthYear,
}: {
  name: string;
  email: string;
  birthYear: number;
}) => {
  const userInfo = await prisma.user.create({
    data: {
      name,
      email,
      birthYear,
    },
  });
  return userInfo;
};

export const getAllUsers = async () => {
  const getUsers = await prisma.user.findMany({});
  return getUsers;
};
export const getAUser: GetASingleUserFunctionType = async (id) => {
  const getAUser = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return getAUser;
};
