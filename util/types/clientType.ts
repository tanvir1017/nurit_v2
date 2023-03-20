import { ReactElement } from "react";
export type largeNavigationDataType = {
  routeName?: string;
  path?: string;
}[];

export interface DashboardMenuItem {
  id: number;
  label: string;
  link: string;
  icon: ReactElement;
}
