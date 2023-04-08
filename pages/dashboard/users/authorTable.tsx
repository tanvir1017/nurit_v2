import { createdAtDateFormatter } from "@/util/dateFormatter";
import { DashBoardAuthorTableType } from "@/util/types/types";
import Image from "next/image";
import { BiUserPin } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { FaUsersCog } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";
import { SlCalender, SlUserFemale } from "react-icons/sl";
import { VscVerifiedFilled } from "react-icons/vsc";

const AuthorTable = (user: { user: DashBoardAuthorTableType }) => {
  return (
    <div className="p-2 border-b  grid grid-cols-8 space-x-2">
      <div className="col-span-3 place-content-start flex items-center">
        <div
          className={`cursor-pointer bg-gradient-to-r from-indigo-500 to-red-500  p-0.5 rounded-full relative  w-14 h-14 overflow-hidden mr-3`}
        >
          <Image
            className={`absolute -top-2 rounded-full p-0.5`}
            alt={user?.user?.first__name}
            src={user?.user?.photo__URL}
            fill
            objectFit="cover"
          />
        </div>
        <div>
          <p>
            {user?.user?.first__name} {user?.user?.last__name}
          </p>
          <p> {user?.user?.email__id}</p>
        </div>
      </div>

      <p className="flex items-center">
        {user?.user?.role === "ADMIN" && (
          <MdAdminPanelSettings className="text-2xl text-green-500 mr-2" />
        )}
        {user?.user?.role === "MEMBER" && (
          <FaUsersCog className="text-2xl text-sky-500 mr-2" />
        )}
        {user?.user?.role === "STUDENT" && (
          <BiUserPin className="text-2xl text-purple-500 mr-2" />
        )}
        {user?.user?.role}
      </p>
      <p className="flex items-center">
        {user?.user?.gender === "female" ? (
          <SlUserFemale className="text-2xl text-pink-500 mr-2" />
        ) : (
          <IoIosPerson className="text-2xl text-indigo-500 mr-2" />
        )}
        {user?.user?.gender?.toUpperCase()}
      </p>
      <p className="flex items-center">
        <BsTelephoneFill className="mr-2" /> {user?.user?.phone__numb}
      </p>
      <p className="flex items-center">
        <SlCalender className="mr-2" />

        {createdAtDateFormatter(user?.user?.createdAt)}
      </p>
      <p className="flex items-center text-green-400">
        <VscVerifiedFilled /> Verified
      </p>
    </div>
  );
};

export default AuthorTable;
