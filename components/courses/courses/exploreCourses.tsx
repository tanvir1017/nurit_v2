import { exploreCoursesFilterData } from "@/util/localDb";
import { motion as m } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ExploreCourses = () => {
  const [width, setWidth] = useState<number>(0);
  const carouselRef = useRef<number | any>();

  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    setWidth(
      carouselRef?.current?.scrollWidth - carouselRef?.current?.offsetWidth
    );
  }, []);

  return (
    <section className="my-24">
      <m.div className="grid grid-flow-col place-items-start">
        <p
          className="text-6xl p-3 font-HSSemiBold leading-tight"
          // onClick={() => <Modal isOpen={} />}
        >
          নতুন কিছু
          <br />{" "}
          <span className="text-[var(--red-primary-brand-color)]">
            এক্সপ্লোর করুন
          </span>
        </p>
        {/* <Modal isOpen={isOpen} openModal={openModal} closeModal={closeModal} /> */}
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
                <div className="mx-auto mb-6  transition ">
                  <Image
                    src={el.iconSource}
                    alt="Filter"
                    width={40}
                    height={100}
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
