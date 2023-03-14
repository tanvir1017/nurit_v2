import prisma from "@/prisma/lib/db.connector";
import {
  A__SingleModelFunctionType,
  GetAllBlogsFunctionType,
} from "@/util/types/types";

export const getAllBlogsExistOnDB: GetAllBlogsFunctionType = async () => {
  const totalBlogs = await prisma.blog.count();
  const blogs = await prisma.blog.findMany({});
  return { blogs, totalBlogs };
};
export const getASingleBlogBasedOnSlug = async (slug: any) => {
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
