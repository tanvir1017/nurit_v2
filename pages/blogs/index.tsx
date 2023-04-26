import ErrorMessage from "@/components/error";
import Skeleton from "@/components/shared/skeleton";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import Blog from "./blog";
const Index = () => {
  const { data, error, isLoading } = useSWR("/api/blogs", fetcher);
  console.log(data);
  let content = null;
  if (!isLoading && !data && error) {
    content = (
      <>
        <ErrorMessage />
      </>
    );
  }
  if (!data && !error && isLoading) {
    content = (
      <>
        {[...Array(4).keys()].map((_, i) => (
          <Skeleton key={i} />
        ))}
      </>
    );
  }
  if (!error && !isLoading && data) {
    content = (
      <>
        {!error &&
          !isLoading &&
          data &&
          data.returnBlogData.blogs.map((_: any, i: number) => (
            <Blog key={i} blog={_} />
          ))}
      </>
    );
  }
  return (
    <main className="App">
      <section className="container">{content}</section>
    </main>
  );
};

export default Index;
