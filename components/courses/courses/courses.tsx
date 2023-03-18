import Course from "@/components/homePage/trendyCourse/course";
import Skeleton from "@/components/shared/skeleton";
import useSWR from "swr";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

const Courses = () => {
  const { data, error, isLoading } = useSWR("/course.json", fetcher);
  return (
    <section className="courses">
      <div
        id="card"
        className="grid grid-cols-4 gap-5 place-items-center mt-14"
      >
        {!isLoading &&
          !error &&
          data &&
          data?.map((el: any) => <Course key={el._id} el={el} />)}
        {!data &&
          !error &&
          isLoading &&
          [...Array(20).keys()].map((_, i) => <Skeleton key={i} />)}
      </div>
    </section>
  );
};

export default Courses;
