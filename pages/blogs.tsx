import Skeleton from "@/components/shared/skeleton";
import Metadata from "@/util/SEO/metadata";
import { apiUrl } from "@/util/api";
import { GetStaticProps } from "next";
import useSWR, { SWRConfig } from "swr";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());
const API = `${apiUrl}/api/blogs`;

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetcher(API);
  return {
    props: {
      fallback: {
        [API]: data,
      },
    },
  };
};
const BlogsFetcherSwrConfig = () => {
  const { data, isLoading, error } = useSWR(API);
  let content = <main className="App"> </main>;
  if (!error && !data && isLoading) {
    content = (
      <main className="App">
        <div
          id="card"
          className="grid grid-cols-4 gap-5 place-items-center mt-14"
        >
          {[...Array(8).keys()].map((_, i) => (
            <Skeleton key={i} />
          ))}
        </div>
      </main>
    );
  }

  if (!data && !isLoading && error) {
    content = (
      <main className="App">
        <p className="text-[var(--red-primary-brand-color)] font-HSSemiBold text-2xl">
          Something went wrong! Try again after some time
        </p>
      </main>
    );
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

export default function Blogs({ fallback }: { fallback: any }) {
  return (
    <SWRConfig value={{ fallback }}>
      <BlogsFetcherSwrConfig />
    </SWRConfig>
  );
}
