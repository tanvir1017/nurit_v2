import Link from "next/link";

const Blog = ({ blog }: any) => {
  const {
    cover,
    createdAt,
    html,
    id,
    readTime,
    slug,
    sub_title,
    tags,
    thumbnail,
    title,
    updatedAt,
    views,
  } = blog;

  return (
    <>
      <Link href={`/blog/${slug}`}>
        {title}
        <div></div>
        {readTime}
      </Link>
    </>
  );
};

export default Blog;
