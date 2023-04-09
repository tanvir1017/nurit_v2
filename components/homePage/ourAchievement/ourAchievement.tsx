import { achievementDB } from "@/util/localDb/skillDb";
import Image from "next/image";

const OurAchievement = () => {
  return (
    <section className="font-HSRegular container  mt-[10rem]">
      <div id="heading_text" className="text-center">
        <p className="text-4xl font-HSBold">
          এই পর্যন্ত আমাদের{" "}
          <span className="text-[var(--red-primary-brand-color)]">অর্জন</span>
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center mt-16">
          <div className="grid grid-cols-2">
            {achievementDB.map((el, i) => (
              <div key={i} className="flex items-center justify-start w-60 m-5">
                <div className=" mr-5 transition">
                  <Image width={80} height={100} src={el.icon} alt={el.title} />
                </div>

                <div>
                  <p className="font-HSBold text-2xl">{el.title}</p>
                  <p className="">{el.subTitle}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="transition-all">
              <Image
                src="/images/content/achievement.png"
                alt="our achievement representor"
                width={550}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAchievement;
