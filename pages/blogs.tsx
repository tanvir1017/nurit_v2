import Skeleton from "@/components/shared/skeleton";
import Metadata from "@/util/SEO/metadata";
import swr from "swr";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

const Blogs = () => {
  const { data, isLoading, error } = swr("/api/blogs", fetcher);
  let content = null;
  if (!error && !data && isLoading) {
    content = (
      <div
        id="card"
        className="grid grid-cols-4 gap-5 place-items-center mt-14"
      >
        {[...Array(8).keys()].map((_, i) => (
          <Skeleton key={i} />
        ))}
      </div>
    );
  }
  if (!data && !isLoading && error) {
    content = <p>Something went wrong!</p>;
  }
  if (!isLoading && !error && data) {
    const {
      returnBlogData: { blogs },
    } = data;
    content = (
      <main className="App">
        <Metadata
          title="NurIT-Blogs"
          name="blog page"
          content="NurIT blogs"
          // key="skill course, course, ms office, office 364"
        />
        <main className="App">
          <section className="container">
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
          </section>
        </main>
      </main>
    );
  }

  return content;
};

export default Blogs;
