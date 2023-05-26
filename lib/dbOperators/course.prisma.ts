import prisma from "@/prisma/prisma/db.connector";
import { Prisma } from "@prisma/client";

export const getAllCourseFromDB = async () => {
  try {
    const itCourse = await prisma.iTCOURSE.findMany({});
    return itCourse;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === "P2002") {
        console.log(
          "There is a unique constraint violation, a new user cannot be created with this email"
        );
      }
    }
    throw e;
  }
};
export const getSpecificCourseViaSlug = async (slug: string) => {
  try {
    const itCourse = await prisma.iTCOURSE.findFirst({
      where: { slug },
    });
    return itCourse;
  } catch (e) {
    console.log(e);
  }
};
