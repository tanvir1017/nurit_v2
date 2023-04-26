import ErrorMessage from "@/components/error";
import Skeleton from "@/components/shared/skeleton";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import Blog from "./blog";
import BlogsHeading from "./blogsheading";
import DigitalSkills from "./digitalskills";
import Elearning from "./e-learning";
import GadgetWorld from "./gadgetworld";
import LatestBlogs from "./latestblogs";
import MobileVersionBlogHeading from "./mobileblogsheading";
const Index = () => {
  const { data, error, isLoading } = useSWR("/api/blogs", fetcher);
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

        <Elearning />
        <DigitalSkills />
        <GadgetWorld />
        <LatestBlogs />
      </>
    );
  }
  return (
    <main className="App">
      <section className="container">
        <div className="my-20">
          <div className="lg:block hidden">
            <BlogsHeading />
          </div>
          <div className="lg:hidden block">
            <MobileVersionBlogHeading />
          </div>
        </div>
        {content}
      </section>
    </main>
  );
};

export default Index;
