import { getSpecificCourseViaSlug } from "@/lib/dbOperators/course.prisma";
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
        const { slug } = req.query;

        const details = await getSpecificCourseViaSlug(slug as string);

        if (!details) {
          return res.status(404).json({
            success: false,
            message: `Data not found at slug:  ${slug}`,
            returnSingleCourse: {},
          });
        }
        return res.status(200).json({
          success: true,
          message: `Data founded at slug ${slug}`,
          returnSingleCourse: details,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
}
