import {
  deleteASingleBlog,
  getASingleBlogBasedOnSlug,
  getAllBlogsExistOnDB,
} from "@/lib/dbOperatons/blogs.prisma";
import { DB_OPERATION_METHOD } from "@/util/types/types";
import { getCookie, hasCookie } from "cookies-next";
import jwt from "jsonwebtoken";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  message: string;
  returnBlogData?: {} | [] | null;
};

interface jwtData {
  id: string;
  first__name: string;
  last__name: string;
  photo__URL: string;
  role: string;
  iat: string;
}

const BlogApiEndPoint = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    switch (req.method) {
      case DB_OPERATION_METHOD.GET: {
        if (req.query.slug) {
          const { slug } = req.query;
          const singleBlog = await getASingleBlogBasedOnSlug(slug as string);
          if (!singleBlog) {
            return res.status(404).send({
              success: false,
              message: `No content available on your query slug: ${slug} 😟`,
              returnBlogData: {},
            });
          }
          return res.status(200).send({
            success: true,
            message: "Blogs found based on your slug 🚀",
            returnBlogData: singleBlog,
          });
        } else {
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
      }

      case DB_OPERATION_METHOD.POST: {
        if (!req.body) {
          return res.status(422).send({
            success: false,
            message: "Unprocessable Entity",
            returnBlogData: {},
          });
        } else {
          const checkHasCookie = hasCookie("u-auth", { req, res });
          if (!checkHasCookie) {
            res.redirect("/auth/login");
          } else {
            const getAuthCookie = getCookie("u-auth", { req, res });
            const decodeUserInfo = jwt.verify(
              getAuthCookie as string,
              process.env.ACCESS_TOKEN as string
            );
            const { slug, title, sub_title, html, tags, cover, thumbnail } =
              req.body;

            console.log(req.body);
          }
        }
      }

      case DB_OPERATION_METHOD.DELETE: {
        if (req.query) {
          const { id } = req.query;
          const deleteSingleBlog = await deleteASingleBlog(
            id as string | undefined
          );
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
    return res.status(500).send({
      success: false,
      message: `Server  error found`,
      returnBlogData: error,
    });
  }
};

export default BlogApiEndPoint;
