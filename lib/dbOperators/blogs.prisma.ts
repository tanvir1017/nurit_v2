import prisma from "@/prisma/prisma/db.connector";
import {
  A__SingleModelFunctionType,
  BlogBodyDataType,
  GetASingleDataFunctionType,
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
  tags,
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
      tags,
      authorId,
      readTime,
    },
  });
  return postBlogs;
};

export const getAllBlogsExistOnDB: GetAllBlogsFunctionType = async () => {
  const totalBlogs = await prisma.blog.count();
  const blogs = await prisma.blog.findMany();
  console.log(blogs);
  return { blogs, totalBlogs };
};
export const getASingleBlogBasedOnSlug: GetASingleDataFunctionType = async (
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
