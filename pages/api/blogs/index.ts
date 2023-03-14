import {
  deleteASingleBlog,
  getAllBlogsExistOnDB,
} from "@/lib/dbOperatons/blogs.prisma";
import { DB_OPERATION_METHOD } from "@/util/types/types";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  message: string;
  returnBlogData?: {} | [] | null;
};

const BlogApiEndPoint = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    switch (req.method) {
      case DB_OPERATION_METHOD.GET: {
        const blogs = await getAllBlogsExistOnDB();
        if (!blogs) {
          return res.status(500).send({
            success: false,
            message: "internal server error",
          });
        }
        return res.status(200).send({
          success: true,
          message: "All blog data found successfully 🚀",
          returnBlogData: blogs,
        });
      }

      case DB_OPERATION_METHOD.DELETE: {
        if (req.query) {
          const { id } = req.query;
          const deleteSingleBlog = await deleteASingleBlog(id);
          if (!deleteSingleBlog) {
            return res.status(500).send({
              success: false,
              message: `Server or client error to delete this single blog with this id : ${id}`,
            });
          }
          return res.status(200).send({
            success: true,
            message: `Blog were contain this id: ${id}, is now deleted successfully`,
            returnBlogData: deleteSingleBlog,
          });
        }
      }
      default:
        return res.status(404).send({
          success: false,
          message: "data not found",
        });
    }
  } catch (error) {
    console.error(error);
  }
};

export default BlogApiEndPoint;
