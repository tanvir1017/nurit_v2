import { achievementDB } from "@/util/localDb/skillDb";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
                <div className="w-[80px] h-auto mr-5 transition">
                  <LazyLoadImage src={el.icon} alt={el.title} effect="blur" />
                </div>

                <div>
                  <p className="font-HSBold text-2xl">{el.title}</p>
                  <p className="">{el.subTitle}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="w-[550px] h-auto transition-all duration-75">
              <LazyLoadImage
                src="/images/content/achievement.png"
                alt="our achievement representor"
                effect="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAchievement;
