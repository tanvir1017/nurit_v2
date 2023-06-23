import ErrorMessage from "@/components/error";
import Skeleton from "@/components/shared/skeleton";
import { MinimalBlurImage } from "@/lib/blurImage";
import { fetcher } from "@/lib/fetcher";
import Metadata from "@/util/SEO/metadata";
import { useRouter } from "next/router";
import useSWR from "swr";
import AboutCourse from "./aboutCourse";
import Card from "./card";

// this repo is fixed

const CourseDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data, error, isLoading } = useSWR(`/api/course/${slug}`, fetcher);
  let content = null;
  if (!isLoading && !data && error) {
    content = (
      <>
        <Metadata title={`Error found`} content="Error found" name="" />
        <main className="App font-HSRegular">
          <section className="container">
            <ErrorMessage />
          </section>
        </main>
      </>
    );
  } else if (!data && !error && isLoading) {
    content = (
      <main className="App font-HSRegular">
        <section className="container">
          {[...Array(1).keys()].map((_, i: number) => (
            <Skeleton key={i} />
          ))}
        </section>{" "}
      </main>
    );
  } else if (!isLoading && !error && data.success) {
    const { returnSingleCourse } = data;
    const {
      instructorRole,
      instructorName,
      instructorSpecialty,
      title,
      subTitle,
      courseCover,
      desc,
      techingListTitle,
      techingList1,
      techingList2,
      techingList3,
      techingList4,
      techingList5,
      techingList6,
      techingList7,
      techingList8,
      careersTitle,
      careerDesc,
      upWorkImg,
      certificateDesc,
      certificateTitle,
      design99Img,
      toptalImg,
      peoplePerHourImg,
      freeLanceImg,
      fiverrImg,
      requirementDesc,
      instructor,
      topic,
      lession,
      video,
      quize,
      fee,
      discountFee,
    } = returnSingleCourse;
    content = (
      <>
        <Metadata title={`Course - ${title}`} content={desc} name="" />
        <main className="App font-HSRegular mt-10">
          <section className="container">
            <div className="COURSE-DETAILS-CONTAINER grid lg:grid-cols-2 grid-cols-1 gap-5 my-10">
              <div className="COURSE-DETAILS">
                <div className="COURSE-INTRO">
                  <h1 className="font-HSBold text-3xl">কোর্স টাইটেল</h1>
                  <div className="border-t-2 mb-5"></div>
                  <p className="text-1xl">{subTitle}</p>
                  <p className="text-2xl">{title}</p>
                </div>
                <div className="INSTRUCTOR-INTRO mt-10">
                  <p className="font-HSSemiBold text-3xl">শিক্ষক পরিচিতি</p>
                  <div className="border-t-2 mb-5"></div>
                  <div className="flex lg:items-start items-center  lg:p-6 ">
                    <div className="flex-none lg:w-48 w-28 relative z-10 before:absolute before:top-1 lg:before:left-1 before:left-5  ring-offset-2 ring-gray-500 bg-white lg:bg-none">
                      <MinimalBlurImage
                        imageSrc={instructor}
                        alt={`${instructorName}`}
                        customHeight="12rem"
                        height={100}
                        width={200}
                        customStyle="bg-slate-300"
                      />
                    </div>
                    <div className="lg:flex-auto pl-6 pt-4 ">
                      <div className="relative flex flex-wrap items-baseline pb-6 before:bg-black dark:before:bg-gray-800 before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
                        <p className="relative  text-white">
                          {instructorSpecialty}
                        </p>
                        <p className="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
                          {instructorName}
                        </p>
                        <p className="relative uppercase text-slate-300 lg:ml-3">
                          {instructorRole}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="REQUIREMENT">
                    <div className="COURSE-INTRO">
                      <p className="font-HSSemiBold text-3xl">
                        কোর্স রিকুয়ারমেন্ট
                      </p>
                      <div className="border-t-2 mb-5"></div>
                    </div>
                    <p>{requirementDesc}</p>
                  </div>
                  <div className="CAREERS-TITLE mt-10">
                    <p className="font-HSSemiBold text-3xl">{careersTitle}</p>
                    <p className="mt-5">{careerDesc}</p>
                  </div>
                </div>
              </div>
              <div>
                <Card
                  courseCover={courseCover}
                  title={title}
                  topic={topic}
                  lession={lession}
                  video={video}
                  quize={quize}
                  techingListTitle={techingListTitle}
                  techingList1={techingList1}
                  techingList2={techingList2}
                  techingList3={techingList3}
                  techingList4={techingList4}
                  techingList5={techingList5}
                  techingList6={techingList6}
                  techingList7={techingList7}
                  techingList8={techingList8}
                  fee={fee}
                  discountFee={discountFee}
                />
              </div>
            </div>

            <AboutCourse
              desc={desc}
              certificateDesc={certificateDesc}
              certificateTitle={certificateTitle}
              design99Img={design99Img}
              toptalImg={toptalImg}
              peoplePerHourImg={peoplePerHourImg}
              freeLanceImg={freeLanceImg}
              fiverrImg={fiverrImg}
              upWorkImg={upWorkImg}
            />
          </section>
        </main>
      </>
    );
  }

  return content;
};

export default CourseDetails;
