import Course from "@/components/homePage/trendyCourse/course";
import Skeleton from "@/components/shared/skeleton";
import { trendyCoursesFilterButton } from "@/util/localDb";
import { useState } from "react";
import swr from "swr";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

const TrendyCourses = () => {
  const [buttonFilterText, setButtonFilterText] = useState("msOffice");
  const { data, error, isLoading } = swr("/api/course", fetcher);

  return (
    <section className="container font-HSRegular  my-40">
      <div id="heading_text" className="text-center">
        <p className="md:text-4xl text-3xl font-HSBold">
          ট্রেন্ডি হাই{" "}
          <span className="text-[var(--red-primary-brand-color)]">
            ডিমান্ডেবল
          </span>{" "}
          কোর্স
        </p>
        <p className="text-base">
          যেকোনো বিষয়ের যেকোনো টপিকে পড়ালেখা করতে চলে যাও{" "}
          <br className="md:hidden block" /> তোমার পছন্দের সেকশনে
        </p>
      </div>
      <div id="trendy_courses">
        <div className="flex items-center justify-center space-x-4">
          {trendyCoursesFilterButton.map((el, i) => {
            return (
              <button
                key={i}
                className={`${
                  el?.filter === buttonFilterText
                    ? "bg-[#ff0912] text-white dark:shadow  button-shadow"
                    : " shadow-lg bg-slate-200  dark:bg-[#342d504d]"
                }  md:px-5 md:py-3 px-4 py-2 rounded-lg mt-16 duration-500 focus:translate-x-2 `}
                onClick={() => setButtonFilterText(el.filter)}
              >
                {el.btnText}
              </button>
            );
          })}
        </div>

        <div
          id="card"
          className="grid lg:grid-cols-4 md:grid-cols-2  gap-5 place-items-center mt-14"
        >
          {!isLoading &&
            !error &&
            data &&
            data?.returnCourse
              ?.filter(
                (el: { category: string }) => el.category === buttonFilterText
              )
              ?.map((el: any) => <Course key={el.id} el={el} />)}
          {!data &&
            !error &&
            isLoading &&
            [...Array(4).keys()].map((_, i) => <Skeleton key={i} />)}
        </div>
      </div>
    </section>
  );
};

export default TrendyCourses;
