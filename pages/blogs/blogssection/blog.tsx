import Link from "next/link";

const Blog = ({ blog }: any) => {
  return (
    <section className="font-HSRegular">
      <Link href={`/blog/${blog?.slug}`}>
        {blog?.title}
        <div></div>
        {blog?.readTime}
      </Link>
    </section>
  );
};

export default Blog;
