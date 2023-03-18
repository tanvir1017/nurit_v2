import { exploreCoursesFilterData } from "@/util/localDb";
import { motion as m } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ExploreCourses = () => {
  const [width, setWidth] = useState<number>(0);
  const carouselRef = useRef<any>();

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <section className=" ">
      <m.div className="flex justify-between">
        <div className="">
          <p className="text-6xl  p-3 font-HSSemiBold leading-tight">
            নতুন কিছু
            <br />{" "}
            <span className="text-[var(--red-primary-brand-color)]">
              এক্সপ্লোর করুন
            </span>
          </p>
        </div>
        <m.div ref={carouselRef} className="carousel ml-[15rem] overflow-clip ">
          <m.div
            className="inner-carousel flex justify-center space-x-5"
            drag="x"
            dragConstraints={{
              right: 0,
              left: -width,
            }}
          >
            {exploreCoursesFilterData.map((el, i) => (
              <div
                className={`item border hover:border-[var(--red-primary-brand-color)] duration-300 cursor-pointer  p-5 w-44 h-40 text-center`}
                key={i}
              >
                <Image
                  className="mx-auto mb-6"
                  src={el.iconSource}
                  width={40}
                  height={100}
                  alt="nothing"
                />
                <p>{el.cardText}</p>
              </div>
            ))}
          </m.div>
        </m.div>
      </m.div>
    </section>
  );
};

export default ExploreCourses;
