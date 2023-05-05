import ErrorMessage from "@/components/error";
import Skeleton from "@/components/shared/skeleton";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import Blog from "./blogssection/blog";
import BlogsHeading from "./blogssection/blogsheading";
import BlogsSocial from "./blogssection/blogssocial";
import DigitalSkills from "./blogssection/digitalskills";
import Elearning from "./blogssection/e-learning";
import GadgetWorld from "./blogssection/gadgetworld";
import LatestBlogs from "./blogssection/latestblogs";
import MobileVersionBlogHeading from "./blogssection/mobileblogsheading";

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
        {[...Array(1).keys()].map((_, i) => (
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
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-3">
            <Elearning />
            <DigitalSkills />
            <GadgetWorld />
            <LatestBlogs />
          </div>
          <div>
            <BlogsSocial />
          </div>
        </div>
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
