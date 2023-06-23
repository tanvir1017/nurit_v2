import { BsPersonVideo3 } from "react-icons/bs";
import { FiUserCheck, FiUsers } from "react-icons/fi";
import { MdSpaceDashboard } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { VscPreview } from "react-icons/vsc";

import {
  DashboardMenuItem,
  ProfileEditSidebarNavType,
  largeNavigationDataType,
} from "../types/clientType";

export const largeNavigationData: largeNavigationDataType = [
  { id: 0, routeName: "সবগুলো কোর্স দেখ", path: "/courses" },
  { id: 1, routeName: "ব্লগ", path: "/blogs" },
  { id: 2, routeName: "সেমিনারস", path: "/not-finished-yet" },
  { id: 3, routeName: "লগইন/সাইন-আপ", path: "/auth/login" },
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
    icon: <FiUserCheck />,
    link: "/profile",
    item: "প্রোফাইল",
  },
  {
    id: 1,
    icon: <RiLockPasswordLine />,
    link: "/profile/update-password",
    item: "পাসওয়ার্ড",
  },
];
