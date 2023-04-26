import Link from "next/link";

const Blog = ({ blog }: any) => {
  return (
    <>
      <Link href={`/blog/${blog?.slug}`}>
        {blog?.title}
        <div></div>
        {blog?.readTime}
      </Link>
    </>
  );
};

export default Blog;
