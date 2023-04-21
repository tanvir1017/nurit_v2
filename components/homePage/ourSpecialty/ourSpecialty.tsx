import { MinimalBlurImage } from "@/lib/blurImage";
import { specialtyDB } from "@/util/localDb/skillDb";

const OurSpecialty = () => {
  return (
    <section className="font-HSRegular container my-[10rem]">
      <div id="heading_text">
        <p className="md:text-4xl text-2xl text-center font-HSBold">
          আমাদের{" "}
          <span className="text-[var(--red-primary-brand-color)]">
            বিশেষত্ব
          </span>
        </p>
      </div>
      <div id="specialty_card" className="pt-16 space-y-4">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
          {specialtyDB
            .filter((el) => el.tag === "TOP")
            .map((el, i) => {
              return (
                <div
                  key={i}
                  className="text-center   dark:bg-[#2025328c] bg-slate-50 shadow-md overflow-y-auto  p-5 w-full h-60 rounded-2xl space-y-4 "
                >
                  <div className="flex justify-center">
                    <MinimalBlurImage
                      width={100}
                      height={100}
                      imageSrc={el.icon}
                      alt={el.shortDesc}
                      customHeight="5rem"
                      customStyle="bg-white/15 rounded-full"
                    />
                    {/* <Image
                      className="absolute top-0"
                      layout="fill"
                      objectFit="cover"
                      src={el.icon}
                      alt="specialty representor"
                    /> */}
                  </div>

                  <p className={`text-[14px] md:text-base`}>{el.shortDesc}</p>
                </div>
              );
            })}
        </div>
        <div className="grid md:grid-cols-2 grid-flow-row gap-4">
          {specialtyDB
            .filter((el) => el.tag === "BOTTOM")
            .map((el, i) => {
              return (
                <div
                  key={i}
                  className="text-left   dark:bg-[#2025328c] bg-slate-50 shadow-md  overflow-y-hidden  p-5 w-full h-60 rounded-2xl space-x-4 flex justify-start items-center"
                >
                  <div
                    className={`rounded-full mr-4 outline  ${
                      i === 0 ? "outline-[#6F71E6]  " : "outline-[#F8580B]"
                    }  outline-offset-4`}
                  >
                    <MinimalBlurImage
                      imageSrc={el.icon}
                      alt="specialty-representor rounded"
                      width={200}
                      height={100}
                      customHeight="5rem"
                      customStyle="bg-slate-300"
                    />
                  </div>

                  <div>
                    <p
                      className={`${
                        i === 0 ? "text-[#6F71E6]" : "text-[#F8580B]"
                      } font-HSSemiBold mb-5`}
                    >
                      {el.title}
                    </p>
                    <p>{el.shortDesc}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default OurSpecialty;
