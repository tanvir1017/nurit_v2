import { ReactNode } from "react";
import Sidebar from "./sidebar";

type PropsType = {
  children: ReactNode;
};

const Layout = ({ children }: PropsType) => {
  return (
    <section>
      <div className="h-screen flex flex-row flex-start">
        <Sidebar />
        <div className="dark:bg-[var(--black-primary-brand-color)] flex-1 p-4 text-white">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Layout;
