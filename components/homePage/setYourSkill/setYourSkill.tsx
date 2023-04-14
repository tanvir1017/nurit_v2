import { MinimalBlurImage } from "@/lib/blurImage";
import { skillDb } from "@/util/localDb/skillDb";

const SetYourSkill = () => {
  return (
    <section className="font-HSRegular container mt-[10rem]">
      <div id="heading_text">
        <p className="md:text-4xl text-2xl text-center font-HSBold">
          নিজের{" "}
          <span className="text-[var(--red-primary-brand-color)]">দক্ষতা</span>{" "}
          নিজেই গুছিয়ে নেয়ার যাত্রা শুরু হোক
        </p>
      </div>
      <div id="process__of__learning__card" className="mt-16">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 ">
          {skillDb.map((el, i) => {
            return (
              <div
                key={i}
                className=" dark:bg-[#2025328c] bg-slate-50 shadow-md  overflow-y-auto  p-5 w-full h-60 rounded-2xl space-y-4"
              >
                <MinimalBlurImage
                  width={80}
                  height={100}
                  imageSrc={el.icon}
                  alt={el.title}
                  customHeight="5rem"
                  customStyle="bg-white/15 rounded-full"
                />
                {/* <Image width={80} height={100} src={el.icon} alt={el.title} /> */}

                <p className="text-2xl font-HSBold">{el.title}</p>
                <p className="font-HSSemiBold">{el.subTitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SetYourSkill;
