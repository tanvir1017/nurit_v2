import Metadata from "@/util/SEO/metadata";
import { ReactNode } from "react";
import ProfileSidebar from "./profilesidebar";

type PropsType = {
  children: ReactNode;
};

export default function ProfileLayout({ children }: PropsType) {
  return (
    <>
      <Metadata content="" name="Update user profile" title="About you" />
      <main className="App">
        <section className="font-HSRegular container py-20">
          <div className="grid grid-cols-12  dark:bg-[#08070c] bg-slate-100 rounded-lg p-10 gap-5">
            <div className="col-span-3">
              <ProfileSidebar />
            </div>
            <div className="col-span-9 dark:text-white dark:border-l-gray-600 border-l-gray-300  border-l-2">
              <div className="pl-3">{children}</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
