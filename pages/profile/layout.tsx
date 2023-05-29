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
        <section className="font-HSRegular container md:py-20 py-10">
          <div className="grid grid-cols-12 dark:bg-[#08070c] bg-slate-100 rounded-lg md:p-10 px-2 py-1.5 md:gap-5 overflow-hidden">
            <div className="md:col-span-3 col-span-12 mb-4 md:mb-0">
              <ProfileSidebar />
            </div>
            <div className="md:col-span-9 col-span-12 dark:text-white md:dark:border-l-gray-600 md:border-l-gray-300 md:border-l-2 md:mt-0 mt-10">
              <div className="md:pl-3">{children}</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
