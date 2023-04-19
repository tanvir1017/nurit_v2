import { getSpecificCourseViaSlug } from "@/lib/dbOperatons/course.prisma";
import { DB_OPERATION_METHOD } from "@/util/types/types";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  message: string;
  returnSingleCourse?: {};
};

export default async function courseDetails(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (req.method === DB_OPERATION_METHOD.GET) {
      if (req.query) {
        const { id } = req.query;
        const details = await getSpecificCourseViaSlug(id as string);
        console.log(details);
        if (!details) {
          return res.status(404).json({
            success: false,
            message: `Data not found at slug:  ${id}`,
            returnSingleCourse: {},
          });
        }
        return res.status(200).json({
          success: true,
          message: `Data founded at slug ${id}`,
          returnSingleCourse: details,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
}
