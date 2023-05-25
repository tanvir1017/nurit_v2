import { ReactElement } from "react";
export type largeNavigationDataType = {
  id: number;
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
  icon: ReactElement;
  link: string;
  item: string;
}
