import { BlurImage } from "@/lib/blurImage";
import Metadata from "@/util/SEO/metadata";
import Link from "next/link";
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
        <Link href={`/course/${el.slug}`}>
          <BlurImage
            imageSrc={el.courseCover}
            alt={el.title}
            width={500}
            height={100}
            customHeight="13.6875rem"
            bg="bg-slate-300"
          />
        </Link>
        <div
          id="course_body"
          className="dark:bg-[var(--black-primary-brand-color)]   px-5 py-8 space-y-4 dark:text-white overflow-auto"
        >
          <p className="text-xl text-[var(--red-primary-brand-color)]">
            {el.subTitle}
          </p>
          <Link href={`/course/${el.slug}`}>
            <p className="text-2xl font-HSSemiBold">{el.title}</p>
          </Link>
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
