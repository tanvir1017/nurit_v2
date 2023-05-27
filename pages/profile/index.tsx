import ErrorMessage from "@/components/error";
import { fetcher } from "@/lib/fetcher";
import Image from "next/image";
import Link from "next/link";
import { AiTwotoneStar } from "react-icons/ai";
import { BiMessageSquareEdit } from "react-icons/bi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiShieldUserLine } from "react-icons/ri";
import useSWR from "swr";
import CourseCertificateCard from "./components/coursecertificatecard";
import OverallProfile from "./components/overallprofile";
import ProfileLayout from "./layout";

const Index = () => {
  const { data, error, isLoading } = useSWR("/api/auth/profile", fetcher);

  let content = null;
  if (!data && !error && isLoading) {
    content = <p>Loading...</p>;
  } else if (!data && !isLoading && error) {
    content = <ErrorMessage />;
  } else {
    // Extracting all of the value that a user can have
    const {
      id,
      createdAt,
      updatedAt,
      first__name,
      last__name,
      username,
      email__id,
      password,
      photo__URL,
      phone__numb,
      gender,
      role,
    } = data.returnData;

    let UserBasedRole;
    switch (role) {
      case "ADMIN":
        {
          UserBasedRole = (
            <AiTwotoneStar className="dark:text-orange-200 text-orange-400 text-[14px]" />
          );
        }
        break;
      case "MEMBER":
        {
          UserBasedRole = (
            <MdOutlineVerifiedUser className="text-orange-200 text-[14px]" />
          );
        }
        break;
      default:
        UserBasedRole = <RiShieldUserLine className=" text-[14px]" />;
        break;
    }
    content = (
      <section>
        <div className="flex items-start justify-between mb-5">
          <h1 className="text-2xl font-HSLight">প্রোফাইল</h1>
          <Link href={`/profile/${username}`}>
            <button className="py-1 px-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full flex items-center">
              <BiMessageSquareEdit className="text-[18px] mr-2 -ml-1" />
              ইডিট
            </button>
          </Link>
        </div>
        <div>
          <div id="PROFILE" className="flex items-start ">
            <div
              className={`bg-gradient-to-r from-emerald-400 to-cyan-500  p-0.5 rounded-full  overflow-hidden relative  md:w-20 md:h-20 w-12 h-12`}
            >
              <Image
                className={`absolute -top-2 rounded-full p-0.5`}
                src={photo__URL}
                alt={`${first__name} ${last__name} avatar`}
                title={`${first__name} ${last__name}'s avatar`}
                fill
                objectFit="cover"
              />
            </div>
            <div className=" ml-6" id="PROFILE-INFO">
              <p className="font-HSSemiBold dark:text-gray-400">
                {first__name} {last__name}
              </p>
              <p className="font-HSLight text-sm mb-2">@{username}</p>
              <p className="inline-flex items-center font-HSLight  border px-2 py-0.5  rounded-full border-emerald-500 text-emerald-500">
                {UserBasedRole}
                <span className="text-[12px] ml-2"> {role}</span>
              </p>
            </div>
          </div>
          <div id="TOTAL-INFO" className="grid grid-cols-4 gap-3 mt-14">
            <OverallProfile
              createdAt={createdAt}
              updatedAt={updatedAt}
              email__id={email__id}
              id={id}
              phone__numb={phone__numb}
            />
          </div>
          <div className="grid grid-cols-2 gap-3 mt-10">
            <div className="col-span-1">
              <CourseCertificateCard />
            </div>
            <div className="col-span-1">
              <CourseCertificateCard />
            </div>
          </div>
        </div>
      </section>
    );
  }
  return <ProfileLayout>{content}</ProfileLayout>;
};

export default Index;
