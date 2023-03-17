import { trendyCoursesFilterButton } from "@/util/localDb";
import { useState } from "react";
import useSWR from "swr";
import Course from "./course";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

const TrendyCourses = () => {
  const [buttonFilterText, setButtonFilterText] = useState("msOffice");
  const { data, error, isLoading } = useSWR("/course.json", fetcher);

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  let content = null;
  if (error) {
    content = "An error has occurred.";
  }
  if (!data) {
    content = "Loading...";
  }
  if (!error && data)
    content = (
      <section className="container font-HSRegular  my-40">
        <div id="heading_text" className="text-center">
          <p className="text-4xl font-HSBold">
            ট্রেন্ডি হাই{" "}
            <span className="text-[var(--red-primary-brand-color)]">
              ডিমান্ডেবল
            </span>{" "}
            কোর্স
          </p>
          <p className="text-base">
            যেকোনো বিষয়ের যেকোনো টপিকে পড়ালেখা করতে চলে যাও তোমার পছন্দের সেকশনে
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
                      : " shadow-lg filter bg-slate-200  dark:bg-[#342d504d]"
                  }  px-5 py-3 rounded-lg mt-16 duration-500 focus:translate-x-2 `}
                  onClick={() => setButtonFilterText(el.filter)}
                >
                  {el.btnText}
                </button>
              );
            })}
          </div>

          <div
            id="card"
            className="grid grid-cols-4 gap-5 place-items-center mt-14"
          >
            {data
              .filter(
                (el: { category: string }) => el.category === buttonFilterText
              )
              .map((el: any) => (
                <Course key={el._id} el={el} />
              ))}
          </div>
        </div>
      </section>
    );
  return content;
};

export default TrendyCourses;
