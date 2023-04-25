import { BlurImage, MinimalBlurImage } from "@/lib/blurImage";

type AboutCourseProps = {
  desc: String;
  certificateDesc: String;
  certificateTitle: String;
  design99Img: String;
  toptalImg: String;
  peoplePerHourImg: String;
  freeLanceImg: String;
  fiverrImg: String;
  upWorkImg: String;
};

const AboutCourse = ({
  upWorkImg,
  desc,
  certificateDesc,
  certificateTitle,
  design99Img,
  toptalImg,
  peoplePerHourImg,
  freeLanceImg,
  fiverrImg,
}: AboutCourseProps) => {
  return (
    <>
      <div className="ABOUT-COURSE">
        <div className="COURSE-INTRO">
          <p className="font-HSSemiBold text-3xl text-center lg:mt-[6rem]">
            কোর্স সর্ম্পকে
          </p>
          <div className="border-t-2 mb-5"></div>
        </div>
        <p>{desc}</p>

        <div className="COURSE-CERTIFICATE my-20 ">
          <div className="grid md:grid-cols-2 place-content-center place-items-center">
            <BlurImage
              imageSrc="https://res.cloudinary.com/djbcnjkin/image/upload/v1682401650/nurit-institute_v2/vkc2buet5gvsf67rlus6.jpg"
              alt="COURSE-CERTIFICATE"
              bg="bg-slate-300"
              customHeight="22.5rem"
              height={100}
              width={500}
              customClass="rounded-2xl"
            />

            <div className="CERTIFICATE-TEXT lg:mt-0 mt-10">
              <h2 className="text-3xl font-HSSemiBold">{certificateTitle}</h2>
              <p className="mt-5">{certificateDesc}</p>
            </div>
          </div>
        </div>
        <div className="COURSE-MARKETPLACE  mt-20 mb-28">
          <div className="grid lg:grid-cols-2 grid-cols-1 w-full place-content-center place-items-center">
            <div className="CERTIFICATE-TEXT">
              <h2 className="text-3xl font-HSSemiBold">
                আমাদের থেকে কোর্স করে আমাদের শিক্ষার্থীগন আজ যেই যেই রিমোট
                মার্কেটপ্লেসে এ সফল{" "}
              </h2>
              <p className="mt-5 text-[18px] font-thin">
                স্কিল অর্জন করে লোকাল মার্কেটে কাজের সুযোগ আছে। অনলাইনে গ্লোবাল
                মার্কেটেও কাজ করতে পারবেন। Fiverr, Upwork, Freelancer,
                Peopleperhour এর মতো গ্লোবাল মার্কেটপ্লেসে Freelancing করতে
                পারবেন।
              </p>
            </div>
            <div className="md:grid grid-flow-col grid-rows-2 grid-cols-3 gap-8  hidden">
              <div className="transform scale-110 -rotate-6">
                <MinimalBlurImage
                  imageSrc={fiverrImg as string}
                  alt=""
                  customHeight="5rem"
                  customStyle="bg-slate-300"
                  height={100}
                  width={150}
                  customClass="bg-slate-100 rounded-lg"
                />
              </div>
              <div className="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
                <MinimalBlurImage
                  imageSrc={upWorkImg as string}
                  alt=""
                  customHeight="5rem"
                  customStyle="bg-slate-300"
                  height={100}
                  width={150}
                  customClass="bg-slate-100 rounded-lg"
                />
              </div>
              <div className="transform scale-150 translate-y-11">
                <MinimalBlurImage
                  imageSrc={design99Img as string}
                  alt=""
                  customHeight="5rem"
                  customStyle="bg-slate-300"
                  height={100}
                  width={150}
                  customClass="bg-slate-100 rounded-lg"
                />
              </div>
              <div className="transform translate-y-24 -rotate-6 translate-x-3">
                <MinimalBlurImage
                  imageSrc={toptalImg as string}
                  alt=""
                  customHeight="5rem"
                  customStyle="bg-slate-300"
                  height={100}
                  width={150}
                  customClass="bg-slate-100 rounded-lg"
                />
              </div>
              <div className="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4">
                <MinimalBlurImage
                  imageSrc={freeLanceImg as string}
                  alt=""
                  customHeight="5rem"
                  customStyle="bg-slate-300"
                  height={100}
                  width={150}
                  customClass="bg-slate-100 rounded-lg"
                />
              </div>
            </div>
            <div>
              <div className="grid grid-cols-3 grid-rows-2 gap-4 md:hidden mt-10">
                <MinimalBlurImage
                  imageSrc={fiverrImg as string}
                  alt=""
                  customHeight="5rem"
                  customStyle="bg-slate-300"
                  height={100}
                  width={150}
                  customClass="bg-slate-100 rounded-lg"
                />
                <MinimalBlurImage
                  imageSrc={peoplePerHourImg as string}
                  alt=""
                  customHeight="5rem"
                  customStyle="bg-slate-300"
                  height={100}
                  width={150}
                  customClass="bg-slate-100 rounded-lg"
                />
                <MinimalBlurImage
                  imageSrc={design99Img as string}
                  alt=""
                  customHeight="5rem"
                  customStyle="bg-slate-300"
                  height={100}
                  width={150}
                  customClass="bg-slate-100 rounded-lg"
                />
                <MinimalBlurImage
                  imageSrc={toptalImg as string}
                  alt=""
                  customHeight="5rem"
                  customStyle="bg-slate-300"
                  height={100}
                  width={150}
                  customClass="bg-slate-100 rounded-lg"
                />
                <MinimalBlurImage
                  imageSrc={freeLanceImg as string}
                  alt=""
                  customHeight="5rem"
                  customStyle="bg-slate-300"
                  height={100}
                  width={150}
                  customClass="bg-slate-100 rounded-lg"
                />
                <MinimalBlurImage
                  imageSrc={upWorkImg as string}
                  alt=""
                  customHeight="5rem"
                  customStyle="bg-slate-300"
                  height={100}
                  width={150}
                  customClass="bg-slate-100 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCourse;
