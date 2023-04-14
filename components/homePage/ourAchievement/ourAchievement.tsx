import { BlurImage, MinimalBlurImage } from "@/lib/blurImage";
import { achievementDB } from "@/util/localDb/skillDb";

const OurAchievement = () => {
  return (
    <section className="font-HSRegular container  mt-[10rem]">
      <div id="heading_text" className="text-center">
        <p className="md:text-4xl text-2xl font-HSBold">
          এই পর্যন্ত আমাদের{" "}
          <span className="text-[var(--red-primary-brand-color)]">অর্জন</span>
        </p>
      </div>
      <div>
        <div className="flex-col justify-center items-center mt-16 md:flex md:flex-row">
          <div className="grid grid-cols-2">
            {achievementDB.map((el, i) => (
              <div
                key={i}
                className="flex items-center justify-start w-60 md:m-5 mt-5 "
              >
                <div className="mr-5 transition">
                  <MinimalBlurImage
                    width={80}
                    height={100}
                    imageSrc={el.icon}
                    alt={el.title}
                    customHeight="5rem"
                    customStyle="bg-white/60 rounded-full"
                  />
                </div>

                <div>
                  <p className="font-HSBold text-2xl">{el.title}</p>
                  <p className={`${i === 2 && "text-[14px]"}`}>{el.subTitle}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="transition-all md:mt-0 mt-8 ">
              <BlurImage
                imageSrc="/images/content/achievement.png"
                alt="our achievement representor"
                width={550}
                height={100}
                customHeight="29rem"
                bg="bg-white/15"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAchievement;
