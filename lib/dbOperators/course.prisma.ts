import prisma from "@/prisma/prisma/db.connector";

export const getAllCourseFromDB = async () => {
  try {
    const itCourse = await prisma.iTCOURSE.findMany({});
    return itCourse;
  } catch (e) {
    return e;
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
