import { profileEditSidebarNav } from "@/util/localDb/navLink";
import Link from "next/link";
import { useRouter } from "next/router";

const ProfileSidebar = () => {
  const { pathname } = useRouter();

  return (
    <div className="">
      <ul className="">
        {profileEditSidebarNav.map((_, i) => (
          <>
            <Link href={_.link} className="pt-4 block">
              <li
                key={i}
                className={` dark:bg-[#111010] bg-white dark:shadow-none shadow-md p-2 rounded-lg  border-transparent border-2  hover:border-purple-500  ${
                  _.link === pathname &&
                  "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                }`}
              >
                {_.item}
              </li>
            </Link>
          </>
        ))}
      </ul>
    </div>
  );
};

export default ProfileSidebar;
