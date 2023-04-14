import { MinimalBlurImage } from "@/lib/blurImage";
import { exploreCoursesFilterData } from "@/util/localDb";
import { motion as m } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ExploreCourses = () => {
  const [width, setWidth] = useState<number>(0);
  const carouselRef = useRef<number | any>();

  useEffect(() => {
    setWidth(
      carouselRef?.current?.scrollWidth - carouselRef?.current?.offsetWidth
    );
  }, []);

  return (
    <section className="my-24">
      <m.div className="grid sm:grid-flow-col  place-items-start">
        <p className="sm:text-6xl text-4xl p-3 font-HSSemiBold leading-tight">
          নতুন কিছু
          <br />{" "}
          <span className="text-[var(--red-primary-brand-color)]">
            এক্সপ্লোর করুন
          </span>
        </p>
        <m.div ref={carouselRef} className="w-[50rem] overflow-hidden">
          <m.div
            className="inner-carousel flex space-x-5"
            drag="x"
            dragConstraints={{
              right: 0,
              left: -width,
            }}
          >
            {exploreCoursesFilterData.map((el, i) => (
              <div
                className={`item border hover:border-[var(--red-primary-brand-color)] duration-300 min-w-[11rem] cursor-pointer p-5 h-40 text-center`}
                key={i}
              >
                <div className="grid place-content-center  mb-6 ">
                  <MinimalBlurImage
                    imageSrc={el.iconSource}
                    alt="Filter"
                    width={40}
                    height={100}
                    customStyle="bg-white/60 w-[4rem]"
                    customHeight="4rem"
                  />
                </div>

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
