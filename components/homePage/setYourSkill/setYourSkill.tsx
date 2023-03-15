import { skillDb } from "@/util/localDb/skillDb";
import Image from "next/image";

const SetYourSkill = () => {
  return (
    <section className="font-HSRegular container">
      <div id="heading_text">
        <p className="text-4xl text-center font-HSBold">
          নিজের{" "}
          <span className="text-[var(--red-primary-brand-color)]">দক্ষতা</span>{" "}
          নিজেই গুছিয়ে নেয়ার যাত্রা শুরু হোক
        </p>
      </div>
      <div id="process__of__learning__card" className="mt-16">
        <div className="grid grid-cols-3 gap-4 ">
          {skillDb.map((el, i) => {
            return (
              <div
                key={i}
                className=" bg-slate-50/60 dark:bg-[#2025328c]  overflow-y-auto  p-5 w-full h-60 rounded-2xl space-y-4"
              >
                <Image width={80} height={100} src={el.icon} alt={el.title} />
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
