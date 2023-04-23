import ErrorMessage from "@/components/error";
import Skeleton from "@/components/shared/skeleton";
import { BlurImage, MinimalBlurImage } from "@/lib/blurImage";
import { useRouter } from "next/router";
import swr from "swr";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

const CourseDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error, isLoading } = swr(`/api/course/${slug}`, fetcher);
  let content = null;
  if (!isLoading && !data && error) {
    content = <ErrorMessage />;
  } else if (!data && !error && isLoading) {
    content = [...Array(1).keys()].map((_, i: number) => <Skeleton key={i} />);
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
      marketPlaceTitle,
      upWorkImg,
      certificateDesc,
      certificateTitle,
      certificateImg,
      design99Img,
      toptalImg,
      peoplePerHourImg,
      freeLanceImg,
      fiverrImg,
      resourceTitle,
      videoIcon,
      pdfIcon,
      bookIcon,
      techingSoftwareTitle,
      techingSoftwareDesc,
      whoCanBuy,
      whoCanBuyTitle,
      requirement,
      requirementDesc,
      // review,
      instructor,
      // registerNow,
      topic,
      lession,
      video,
      quize,
      fee,
      discountFee,
    } = returnSingleCourse;
    content = (
      <>
        <div className="COURSE-DETAILS-CONTAINER grid grid-cols-2 gap-5 my-10">
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
              <div className="flex p-6 ">
                <div className="flex-none w-48 relative z-10 before:absolute before:top-1  before:left-1 ring ring-offset-2 ring-gray-500 ">
                  <MinimalBlurImage
                    imageSrc={instructor}
                    alt={` ${instructorName}`}
                    customHeight="12rem"
                    height={100}
                    width={200}
                    customStyle="bg-slate-300"
                  />
                </div>
                <div className="flex-auto pl-6">
                  <div className="relative flex flex-wrap items-baseline pb-6 before:bg-black dark:before:bg-gray-800 before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
                    <p className="relative  text-white">
                      {instructorSpecialty}
                    </p>
                    <p className="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
                      {instructorName}
                    </p>
                    <p className="relative uppercase text-slate-300 ml-3">
                      {instructorRole}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="COURSE-DETAILS-CARD flex items-center h-screen overflow-hidden w-full">
            <div>
              <BlurImage
                imageSrc={courseCover}
                alt={title}
                bg="bg-slate-300"
                height={100}
                width={500}
                customHeight="28rem"
              />
              <div className="COURSE-CARD-BODY">
                <div className="dark:bg-gray-800 shadow dark:shadow-sm p-5">
                  <div className="flex justify-center items-center space-x-5">
                    {[
                      {
                        title: "টপিকস",
                        number: topic,
                        pic: "/icons/details/topic.png",
                      },
                      {
                        title: "লেসনস",
                        number: lession,
                        pic: "/icons/details/lession.png",
                      },
                      {
                        title: "ভিডিওস",
                        number: video,
                        pic: "/icons/details/videos.png",
                      },
                      {
                        title: "কুইজেস",
                        number: quize,
                        pic: "/icons/details/quizes.png",
                      },
                    ].map(
                      (
                        _: { title: string; number: number; pic: string },
                        i: number
                      ) => {
                        return (
                          <div
                            key={i}
                            className=" border p-3 rounded-lg hover:bg-slate-600 details-card-icons relative h-28"
                          >
                            <div className="hover:-translate-y-10 hover:rotate-12 transition-transform duration-200 w-full ">
                              {/* <div className="hover:-translate-y-10 hover:rotate-12 transition-transform duration-200 w-full absolute border h-24 "> */}
                              <MinimalBlurImage
                                imageSrc={_.pic}
                                alt="Topics"
                                customHeight="2rem"
                                customStyle="bg-slate-300"
                                height={60}
                                width={60}
                              />
                            </div>
                            <p className="">
                              {_.number} {_.title}
                            </p>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <main className="App font-HSRegular">
      <section className="container">{content}</section>
    </main>
  );
};

export default CourseDetails;
