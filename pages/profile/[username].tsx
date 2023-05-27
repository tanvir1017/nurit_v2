import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineLoading } from "react-icons/ai";
import { BiMessageSquareEdit } from "react-icons/bi";
import ProfileLayout from "./layout";

const UserName = () => {
  const { query } = useRouter();
  const { username } = query;
  return (
    <ProfileLayout>
      <div className="flex items-center space-x-4">
        <button className="py-1 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center">
          <AiOutlineLoading className="text-[18px] mr-2 -ml-1 animate-spin" />
          Update
        </button>
        <Link href={`/profile`}>
          <button className="py-1 px-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full flex items-center">
            <BiMessageSquareEdit className="text-[18px] mr-2 -ml-1" />
            cancel
          </button>
        </Link>
      </div>
    </ProfileLayout>
  );
};

export default UserName;
