import Metadata from "@/util/SEO/metadata";
import swr from "swr";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

const Blogs = () => {
  const { data, isLoading, error } = swr("/api/blogs", fetcher);
  const {
    returnBlogData: { blogs },
  } = data;

  return (
    <>
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
    </>
  );
};

export default Blogs;
