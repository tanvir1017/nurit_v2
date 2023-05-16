import { ReactElement } from "react";
export type largeNavigationDataType = {
  routeName?: string;
  path?: string;
}[];

export interface DashboardMenuItem {
  label: string;
  link: string;
  icon: ReactElement;
}
export interface ProfileEditSidebarNavType {
  id: number;
  link: string;
  item: string;
}
