import { BsPersonVideo3 } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { MdSpaceDashboard } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import {
  DashboardMenuItem,
  largeNavigationDataType,
} from "../types/clientType";

export const largeNavigationData: largeNavigationDataType = [
  { routeName: "সবগুলো কোর্স দেখ", path: "/courses" },
  { routeName: "ব্লগ", path: "/blogs" },
  { routeName: "সেমিনারস", path: "/seminars" },
  { routeName: "গ্যালারি", path: "/blurImage" },
];

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
