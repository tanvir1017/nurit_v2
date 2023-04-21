import ErrorMessage from "@/components/error";
import Course from "@/components/homePage/trendyCourse/course";
import Skeleton from "@/components/shared/skeleton";
import useSWR from "swr";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

const Courses = () => {
  const { data, error, isLoading } = useSWR("/api/course", fetcher);
  return (
    <section className="courses">
      <div
        id="card"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 place-items-center mt-14"
      >
        {!isLoading &&
          !error &&
          data.success &&
          data?.returnCourse.map((el: any) => <Course key={el._id} el={el} />)}
        {!isLoading && !data && error && <ErrorMessage />}
        {!data &&
          !error &&
          isLoading &&
          [...Array(8).keys()].map((_, i) => <Skeleton key={i} />)}
      </div>
    </section>
  );
};

export default Courses;
