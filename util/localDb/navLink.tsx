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
];

export const dashboardMenuItems: DashboardMenuItem[] = [
  {
    label: "Home",
    link: "/dashboard",
    icon: <MdSpaceDashboard />,
  },
  {
    label: "Blogs",
    link: "/dashboard/posts",
    icon: <VscPreview />,
  },
  {
    label: "Manage Users",
    link: "/dashboard/users",
    icon: <FiUsers />,
  },
];
