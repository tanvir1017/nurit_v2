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
  { routeName: "ড্যাশবোর্ড", path: "/dashboard" },
  { routeName: "সেমিনারস", path: "/seminars" },
];

export const dashboardMenuItems: DashboardMenuItem[] = [
  {
    id: 1,
    label: "Home",
    link: "/dashboard",
    icon: <MdSpaceDashboard />,
  },
  {
    id: 2,
    label: "Blogs",
    link: "/dashboard/posts",
    icon: <VscPreview />,
  },
  {
    id: 3,
    label: "Manage Users",
    link: "/dashboard/users",
    icon: <FiUsers />,
  },
];
