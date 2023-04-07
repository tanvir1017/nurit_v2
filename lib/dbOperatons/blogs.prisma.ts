import prisma from "@/prisma/lib/db.connector";
import {
  A__SingleModelFunctionType,
  BlogBodyDataType,
  GetASingleBlogFunctionType,
  GetAllBlogsFunctionType,
  PostABlogToDB,
} from "@/util/types/types";
// COMMENT: => check file if ti's has the type error problem
export const postABlogToDb: PostABlogToDB = async ({
  slug,
  title,
  sub_title,
  cover,
  thumbnail,
  html,
  tag,
  authorId,
  readTime,
}: BlogBodyDataType) => {
  const postBlogs = await prisma.blog.create({
    data: {
      slug,
      title,
      sub_title,
      cover,
      thumbnail,
      html,
      tag,
      authorId,
      readTime,
    },
  });
  return postBlogs;
};

export const getAllBlogsExistOnDB: GetAllBlogsFunctionType = async () => {
  const totalBlogs = await prisma.blog.count();
  const blogs = await prisma.blog.findMany();
  return { blogs, totalBlogs };
};
export const getASingleBlogBasedOnSlug: GetASingleBlogFunctionType = async (
  slug
) => {
  const blog = await prisma.blog.findUnique({
    where: {
      slug,
    },
  });
  return blog;
};

export const deleteASingleBlog: A__SingleModelFunctionType = async (id) => {
  const blog = await prisma.blog.delete({
    where: {
      id,
    },
  });
  return blog;
};
