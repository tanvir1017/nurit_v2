import { getASingleBlogBasedOnSlug } from "@/lib/dbOperatons/blogs.prisma";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  message: string;
  returnBlogData?: {} | [];
};

type slugTypeData = string;

const singleBlog = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    if (req.query) {
      const { slug } = req.query;
      const singleBlogBasedOnSlug = await getASingleBlogBasedOnSlug(
        slug as string | undefined
      );
      if (!singleBlogBasedOnSlug) {
        return res.status(404).send({
          success: !true,
          message: `Data not found with this specific slug: ${req.query.slug} `,
        });
      } else {
        return res.status(200).send({
          success: true,
          message: `Data found from blogs collection with this specific slug: ${req.query.slug}`,
          returnBlogData: singleBlogBasedOnSlug,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export default singleBlog;
