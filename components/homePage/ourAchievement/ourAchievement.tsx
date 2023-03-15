import { achievementDB } from "@/util/localDb/skillDb";
import Image from "next/image";

const OurAchievement = () => {
  return (
    <section className="font-HSRegular container">
      <div id="heading_text" className="text-center mt-16">
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
                <Image
                  className="mr-5"
                  width={70}
                  height={100}
                  src={el.icon}
                  alt={el.title}
                />
                <div>
                  <p className="font-HSBold text-2xl">{el.title}</p>
                  <p className="">{el.subTitle}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Image
              width={500}
              height={100}
              priority
              src="/images/content/achievement.png"
              alt="our achievement representor"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAchievement;
