import Image from "next/image";

const TrendyCourses = () => {
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
        <small className="">
          যেকোনো বিষয়ের যেকোনো টপিকে পড়ালেখা করতে চলে যাও তোমার পছন্দের সেকশনে
        </small>
      </div>
      <div id="trendy_courses">
        <div className="flex items-center justify-center space-x-4">
          {[
            "MS Office",
            "Graphic Design",
            "Web Design",
            "DigitalMarketing",
            "Programming ",
            "Digital Skills",
          ].map((btnText, i) => {
            return (
              <button
                key={i}
                className="bg-[var(--red-primary-brand-color)]  px-5 py-3 rounded-lg mt-16 focus:transition-all duration-300 focus:translate-x-2"
                style={{
                  boxShadow: "0px 1px 12px 0 hsl(0deg 76.29% 46.18% / 98.6%)",
                }}
              >
                {btnText}
              </button>
            );
          })}
        </div>

        <div id="card" className="grid place-items-center mt-14">
          <div className="">
            <Image
              width={350}
              height={100}
              src="/images/content/course_not_found.png"
              alt="course not found"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendyCourses;
