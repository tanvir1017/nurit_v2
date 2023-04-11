import { SectionBlur } from "@/components/shared/blur";
import { processOfStartCourse } from "@/util/localDb/skillDb";
import Image from "next/image";

const ProcessOfStartCourse = () => {
  return (
    <section className="container font-HSRegular my-[10rem] relative  w-full overflow-hidden overflow-x-clip  bg-slate-50 bg-gradient-to-t from-slate-50 to-slate-100 dark:bg-[var(--black-primary-brand-color)] dark:bg-none p-11 rounded-lg ">
      <SectionBlur />
      <div id="heading_text">
        <p className="text-4xl text-center font-HSBold">
          <span className="text-[var(--red-primary-brand-color)]">কোর্স </span>
          শুরু করার প্রক্রিয়া
        </p>
      </div>

      <div id="process_of_start_course" className="my-12">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
          {processOfStartCourse.map((el, i) => (
            <div
              key={i}
              className="p-5 rounded-lg  space-y-5 backdrop-blur-lg filter dark:bg-[#342d504d]  bg-slate-50 shadow-md"
            >
              <Image
                width={80}
                height={100}
                className="mx-auto"
                src={el.icon}
                alt={el.title}
              />
              <p className="font-HSSemiBold text-2xl pt-8 text-center">
                {el.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessOfStartCourse;
