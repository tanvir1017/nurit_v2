import { BsPersonVideo3 } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { MdSpaceDashboard } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import {
  DashboardMenuItem,
  ProfileEditSidebarNavType,
  largeNavigationDataType,
} from "../types/clientType";

export const largeNavigationData: largeNavigationDataType = [
  { routeName: "সবগুলো কোর্স দেখ", path: "/courses" },
  { routeName: "ব্লগ", path: "/blogs" },
  // { routeName: "গ্যালারি", path: "/gellary" },
  { routeName: "সেমিনারস", path: "/not-finished-yet" },
];

// hello
export const dashboardMenuItems: DashboardMenuItem[] = [
  {
    label: "Home",
    link: "/dashboard/home",
    icon: <MdSpaceDashboard />,
  },
  {
    label: "Blog Post",
    link: "/dashboard/posts",
    icon: <VscPreview />,
  },
  {
    label: "Manage Users",
    link: "/dashboard/users",
    icon: <FiUsers />,
  },
  {
    label: "Manage Courses",
    link: "/dashboard/courses",
    icon: <BsPersonVideo3 />,
  },
];

export const profileEditSidebarNav: ProfileEditSidebarNavType[] = [
  {
    id: 0,
    link: "/profile",
    item: "প্রোফাইল",
  },
  {
    id: 1,
    link: "/profile/account",
    item: "অ্যাকাউন্ট",
  },
  {
    id: 2,
    link: "/profile/password",
    item: "পাসওয়ার্ড",
  },
];
