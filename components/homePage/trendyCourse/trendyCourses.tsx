import Image from "next/image";
import { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";

const TrendyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [buttonFilterText, setButtonFilterText] = useState("msOffice");
  useEffect(() => {
    fetch("/course.json")
      .then((res) => res.json())
      .then((data) => {
        const filterByButton = data.filter(
          (item: { category: string }) => item.category === buttonFilterText
        );
        setCourses(filterByButton);
      });
  }, [buttonFilterText]);
  return (
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
          {[
            { btnText: "MS Office", filter: "msOffice" },
            { btnText: "Graphic Design", filter: "graphic" },
            { btnText: "Web Design", filter: "webDesign" },
            { btnText: "DigitalMarketing", filter: "digitalMarketing" },
            { btnText: "Programming ", filter: "programming" },
            { btnText: "Digital Skills", filter: "digitalSkills" },
          ].map((el, i) => {
            return (
              <button
                key={i}
                className={`${
                  el?.filter === buttonFilterText
                    ? "bg-[#ff0912] text-white dark:shadow  button-shadow"
                    : "backdrop-blur-lg filter bg-[#342d504d]"
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
          {courses.map((el: any) => (
            <div className="" key={el._id}>
              <Image
                src={el.courseCover}
                width={500}
                height={100}
                alt={el.title}
              />
              <div
                id="course_body"
                className="dark:bg-[var(--black-primary-brand-color)]  px-5 py-8 space-y-4 dark:text-white card-shadow"
              >
                <p className="text-xl text-[var(--red-primary-brand-color)]">
                  {el.subTitle}
                </p>
                <p className="text-2xl font-HSSemiBold">{el.title}</p>
                <div className="flex justify-between items-center">
                  <strong className="flex items-center">
                    {[...Array(Math.ceil(el?.review)).keys()].map((el, i) => {
                      return <BsStarFill key={i} className="text-amber-500" />;
                    })}
                  </strong>
                  <div className="flex items-center space-x-8 text-lg">
                    <p className="text-red-500 line-through italic font-HSSemiBold ">
                      {el.discountFee} টাকা
                    </p>
                    <p>{el.fee} টাকা</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendyCourses;
