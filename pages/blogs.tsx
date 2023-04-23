import Skeleton from "@/components/shared/skeleton";
import Metadata from "@/util/SEO/metadata";
import { apiUrl } from "@/util/api";
import swr from "swr";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());
const API = `${apiUrl}/api/blogs`;

const Blogs = () => {
  const { data, isLoading, error } = swr(API, fetcher);
  console.log(error);
  console.log(data);
  let content = null;
  if (!error && !data && isLoading) {
    content = (
      <>
        {[...Array(8).keys()].map((_, i) => (
          <Skeleton key={i} />
        ))}
      </>
    );
  }

  if (!data && !isLoading && error) {
    content = (
      <p className="text-[var(--red-primary-brand-color)] font-HSSemiBold text-2xl">
        Something went wrong! Try again after some time
      </p>
    );
  }
  if (!isLoading && !error && data) {
    const {
      returnBlogData: { blogs },
    } = data;

    content = (
      <div>
        <h1 className="text-green-500">
          {" "}
          total blogs are available: {blogs.length}
        </h1>
        {blogs.map((item: any) => {
          return (
            <div key={item?.id}>
              <h1>{item.title}</h1>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <Metadata
        title="NurIT-Blogs"
        name="blog page"
        content="NurIT blogs"
        // key="skill course, course, ms office, office 364"
      />
      <main className="App">
        <section className="container">{content}</section>
      </main>
    </>
  );
};

export default Blogs;
