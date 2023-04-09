import Metadata from "@/util/SEO/metadata";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

const Course = ({ el }: any) => {
  return (
    <>
      <Metadata
        title="NurIT-Courses"
        name="course page"
        content="all course page. You can find every course in this page that we are providing"
        // key="skill course, course, ms office, office 364"
      />
      <div className="h-[28rem] overflow-hidden card-shadow transition">
        <Image src={el.courseCover} width={500} height={100} alt={el.title} />
        <div
          id="course_body"
          className="dark:bg-[var(--black-primary-brand-color)]  px-5 py-8 space-y-4 dark:text-white overflow-auto"
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
    </>
  );
};

export default Course;
