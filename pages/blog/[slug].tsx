import ErrorMessage from "@/components/error";
import Skeleton from "@/components/shared/skeleton";
import { fetcher } from "@/lib/fetcher";
import { fadeInUp, stagger } from "@/lib/framer-motion/fadeUp";
import { motion as m } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";
import { CiTimer } from "react-icons/ci";
import { VscEye } from "react-icons/vsc";
import useSWR from "swr";

type BlogDataType = {
  authorId: String;
  cover: String;
  createdAt: String;
  html: String;
  readTime: String;
  sub_title: String;
  tags: String[];
  thumbnail: String;
  title: String;
  updatedAt: String;
  views: Number;
};
const BlogDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data, error, isLoading } = useSWR(`/api/blogs/${slug}`, fetcher);
  let content = null;
  if (!data && error && !isLoading) {
  }
  if (!data && !isLoading && error) {
    content = (
      <>
        <m.div
          className="w-full md:w-2/3 mx-auto p-4"
          initial="initial"
          animate="animate"
          exit={{ opacity: 0 }}
        >
          <ErrorMessage />
        </m.div>
      </>
    );
  }
  if (!data && !error && isLoading) {
    content = (
      <>
        {[...Array(1).keys()].map((_, i) => (
          <Skeleton key={i} />
        ))}
      </>
    );
  }
  if (!error && !isLoading && data) {
    const {
      authorId,
      cover,
      createdAt,
      html,
      readTime,
      sub_title,
      tags,
      thumbnail,
      title,
      updatedAt,
      views,
    } = data?.returnBlogData as BlogDataType;
    content = (
      <m.div
        className="w-full md:w-2/3 mx-auto p-4"
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
      >
        <m.div variants={stagger}>
          <Link href="/blogs">
            <m.div variants={fadeInUp} className="flex items-center ">
              <BsArrowLeft /> <p className="ml-2">Back</p>
            </m.div>
          </Link>
          <m.div
            variants={fadeInUp}
            className="my-10 flex items-center justify-between"
          >
            <div>
              <m.h1
                variants={fadeInUp}
                className="text-2xl md:text-3xl font-extrabold text-slate-700 dark:text-slate-100 my-4"
              >
                {title}
              </m.h1>
              <m.div
                variants={fadeInUp}
                className="flex items-center  text-md mt-2 space-x-2"
              >
                creator pic
                <div>
                  <Link href={"."} className=" font-medium">
                    creator name
                  </Link>
                  <small className="block text-xs font-medium text-slate-500">
                    Posted time
                  </small>
                </div>
              </m.div>
            </div>
            <div className="flex  items-center space-x-4">
              <div
                className="flex items-center space-x-1 cursor-pointer"
                title="See viewers"
              >
                <VscEye />
                <small className="text-xs text-slate-500 dark:text-slate-100 font-medium">
                  {views as number}
                </small>
              </div>
              <div
                className="flex items-center space-x-1"
                title="Time need for read the whole blog"
              >
                <CiTimer />
                <small className="text-xs text-slate-500 dark:text-slate-100 font-medium">
                  {readTime}
                </small>
              </div>
            </div>
          </m.div>
          <m.div
            variants={fadeInUp}
            dangerouslySetInnerHTML={{ __html: html as string }}
            className="prose prose-slate lg:prose-lg dark:prose-invert max-w-none mb-24  font-HSRegular"
          ></m.div>
        </m.div>
      </m.div>
    );
  }
  return (
    <main className="App">
      <section className="container">{content}</section>
    </main>
  );
};

export default BlogDetails;
