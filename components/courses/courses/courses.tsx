import ErrorMessage from "@/components/error";
import Course from "@/components/homePage/trendyCourse/course";
import Skeleton from "@/components/shared/skeleton";
import swr from "swr";

const fetcher = async (url: RequestInfo | URL) => {
  try {
    const res = await fetch(url);
    const result = await res.json();
    return result;
  } catch (e: any) {
    throw new Error("error is", e);
  }
};

const Courses = () => {
  const { data, error, isLoading } = swr("/api/course", fetcher);
  console.log(data);
  if (isLoading) {
    return (
      <>
        {[...Array(8).keys()].map((_, i) => (
          <Skeleton key={i} />
        ))}
      </>
    );
  }
  if (error) {
    return (
      <>
        <ErrorMessage />
      </>
    );
  }

  return (
    <section className="courses">
      <div
        id="card"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 place-items-center mt-14"
      >
        {data?.returnCourse &&
          data?.returnCourse?.map((el: any, i: number) => (
            <Course key={i} el={el} />
          ))}
        {data?.returnCourse?.length === 0 && (
          <>
            <p>No course available right now</p>
          </>
        )}
      </div>
    </section>
  );
};

export default Courses;
