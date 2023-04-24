import {
  getAllBlogsExistOnDB,
  postABlogToDb,
} from "@/lib/dbOperatons/blogs.prisma";
import { DB_OPERATION_METHOD } from "@/util/types/types";
import { hasCookie } from "cookies-next";
import type { NextApiRequest, NextApiResponse } from "next";
const readingTime = require("reading-time");

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
            const {
              slug,
              title,
              sub_title,
              html,
              tags,
              cover,
              thumbnail,
              authorId,
            } = req.body;

            const states = readingTime(html);
            const readTime = states.text;

            const sendDataToTheDb = await postABlogToDb({
              slug,
              title,
              sub_title,
              cover,
              thumbnail,
              html,
              tags,
              authorId,
              readTime,
            });
            if (!sendDataToTheDb) {
              return res.status(500).json({
                success: false,
                message: "Something went wrong",
                returnBlogData: {},
              });
            } else {
              return res.status(201).json({
                success: true,
                message: "Blog posted",
                returnBlogData: sendDataToTheDb,
              });
            }
          }
        }
      }
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
