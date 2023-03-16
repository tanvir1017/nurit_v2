import { specialtyDB } from "@/util/localDb/skillDb";
import Image from "next/image";

const OurSpecialty = () => {
  return (
    <section className="font-HSRegular container my-[10rem]">
      <div id="heading_text">
        <p className="text-4xl text-center font-HSBold">
          আমাদের{" "}
          <span className="text-[var(--red-primary-brand-color)]">
            বিশেষত্ব
          </span>
        </p>
      </div>
      <div id="specialty_card" className="mt-16">
        <div className="grid grid-cols-3 gap-4">
          {specialtyDB.map((el, i) => {
            return (
              <div key={i} className="text-center">
                <Image
                  className="mx-auto"
                  width={100}
                  height={100}
                  src={el.icon}
                  alt="specialty representor"
                />
                <p>{el.shortDesc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurSpecialty;
