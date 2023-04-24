import { BlurImage, MinimalBlurImage } from "@/lib/blurImage";
import { motion as m } from "framer-motion";
import { IoIosCheckmarkCircle } from "react-icons/io";
type CardProps = {
  courseCover: String;
  title: String;
  topic: Number;
  lession: Number;
  video: Number;
  quize: Number;
  techingListTitle: String;
  techingList1: String;
  techingList2: String;
  techingList3: String;
  techingList4: String;
  techingList5: String;
  techingList6: String;
  techingList7: String;
  techingList8: String;
  fee: Number;
  discountFee: Number;
};

const Card = ({
  courseCover,
  title,
  topic,
  lession,
  video,
  quize,
  techingListTitle,
  techingList1,
  techingList2,
  techingList3,
  techingList4,
  techingList5,
  techingList6,
  techingList7,
  techingList8,
  fee,
  discountFee,
}: CardProps) => {
  return (
    <div className="COURSE-DETAILS-CARD flex items-center h-screen overflow-hidden w-full">
      <div className=" sticky top-10">
        <BlurImage
          imageSrc={courseCover as string}
          alt={title as string}
          bg="bg-slate-300"
          height={100}
          width={500}
          customHeight="28rem"
        />
        <div className="COURSE-CARD-BODY">
          <div className="dark:bg-gray-800 shadow dark:shadow-sm p-5">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-2 gap-5 place-content-center">
              {[
                {
                  title: "টপিকস",
                  number: topic,
                  pic: "/icons/details/lession.png",
                },
                {
                  title: "লেসনস",
                  number: lession,
                  pic: "/icons/details/topic.png",
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
                  _: { title: String; number: Number; pic: String },
                  i: number
                ) => {
                  return (
                    <div
                      key={i}
                      className=" border p-3 rounded-lg hover:bg-slate-600 details-card-icons relative "
                    >
                      <div className="h-[3.5rem]"></div>
                      <div className="lg:hover:-translate-y-10 hover:rotate-12 transition-transform duration-200 w-full h-[6.5rem] absolute  -top-0 -left-0  ">
                        <MinimalBlurImage
                          imageSrc={_.pic as string}
                          alt="Topics"
                          customHeight="3.5rem"
                          customStyle="bg-slate-300"
                          height={60}
                          width={60}
                        />
                      </div>
                      <p className="">
                        {_.number as number} {_.title}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
            <div className="WHAT-YOU-LEARN">
              <p className="font-HSLight text-2xl border-b  mt-5">
                {techingListTitle}
              </p>
              <div className="mt-5">
                {[
                  techingList1,
                  techingList2,
                  techingList3,
                  techingList4,
                  techingList5,
                  techingList6,
                  techingList7,
                  techingList8,
                ].map((_, i: number) => (
                  <p key={i} className="flex items-center">
                    <span className="mr-3">
                      <IoIosCheckmarkCircle className="text-green-500" />{" "}
                    </span>
                    {_}
                  </p>
                ))}
              </div>
              <div className="PRICE flex items-center justify-between my-4">
                <m.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className=" border-transparent rounded-lg  bg-gray-600 outline-transparent py-2 px-10"
                >
                  Enroll Now
                </m.button>
                <div className="flex items-center space-x-5">
                  <p className="text-2xl font-HSBold">{fee as number}</p>
                  <p className="italic line-through">{discountFee as number}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
