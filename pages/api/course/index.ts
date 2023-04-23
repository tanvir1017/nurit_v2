import { getAllCourseFromDB } from "@/lib/dbOperatons/course.prisma";
import { DB_OPERATION_METHOD } from "@/util/types/types";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  message: string;
  returnCourse?: {} | [] | null;
};

export default async function Course(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    switch (req.method) {
      case DB_OPERATION_METHOD.GET: {
        const course = await getAllCourseFromDB();
        if (!course) {
          return res.status(404).send({
            success: false,
            message: `Course not found`,
            returnCourse: {},
          });
        }

        return res.status(200).json({
          success: true,
          message: "Data found successful 🚀",
          returnCourse: course,
        });
      }
    }
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: `internal server error & ${e}`,
      returnCourse: {},
    });
  }
}
