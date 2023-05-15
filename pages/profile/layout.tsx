import { ReactNode } from "react";
import ProfileSidebar from "./profilesidebar";

type PropsType = {
  children: ReactNode;
};

export default function ProfileLayout({ children }: PropsType) {
  return (
    <section className="font-HSRegular">
      <div className="h-screen flex flex-row flex-start">
        <ProfileSidebar />
        <div className="dark:bg-[var(--black-primary-brand-color)] flex-1 p-4 text-white">
          {children}
        </div>
      </div>
    </section>
  );
}
