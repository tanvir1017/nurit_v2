import { getSpecificCourseViaSlug } from "@/lib/dbOperatons/course.prisma";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  message: string;
  returnSingleCourse?: {};
};

export default async function CourseDetails(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (req.query) {
      const { slug } = req.query;

      const details = await getSpecificCourseViaSlug(slug as string);

      if (!details) {
        return res.status(404).json({
          success: false,
          message: `Data not found at slug: ${slug}`,
          returnSingleCourse: {},
        });
      }
      return res.status(200).json({
        success: true,
        message: `Data founded at slug ${slug}`,
        returnSingleCourse: details,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
