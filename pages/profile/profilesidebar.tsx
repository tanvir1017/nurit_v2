import ProfileMenuBar from "@/components/shared/headlessui/profilemenubar";
import { profileEditSidebarNav } from "@/util/localDb/navLink";
import Link from "next/link";
import { useRouter } from "next/router";

const ProfileSidebar = () => {
  const { pathname } = useRouter();

  return (
    <div className="">
      <ul className="relative">
        <ProfileMenuBar />
        {profileEditSidebarNav.map((_, i) => {
          return (
            <Link key={i} href={_.link} className="pt-4 md:block hidden">
              <li
                className={`flex items-center dark:bg-[#111010] bg-white dark:shadow-none shadow-md p-2 rounded-lg  border-transparent border-2  hover:border-purple-500  ${
                  pathname === _.link &&
                  "bg-gradient-to-r from-pink-500 to-purple-500 text-white "
                }`}
              >
                <span className="mr-3 block">{_.icon}</span>
                <span
                  className={`${
                    _.link !== pathname &&
                    "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 font-HSSemiBold"
                  }`}
                >
                  {_.item}
                </span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default ProfileSidebar;
