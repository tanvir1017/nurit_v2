import ErrorMessage from "@/components/error";
import Skeleton from "@/components/shared/skeleton";
import Course from "@/pages/courses/course";
import swr from "swr";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

const Courses = () => {
  const { data, error, isLoading } = swr("/api/course", fetcher);
  console.log(error);
  return (
    <section className="courses">
      <div
        id="card"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 place-items-center mt-14"
      >
        {!isLoading &&
          !error &&
          data.success &&
          data?.returnCourse.map((el: any, i: number) => (
            <Course key={i} el={el} />
          ))}
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
