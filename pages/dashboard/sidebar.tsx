import LightModeBrand from "@/components/shared/brand";
import { dashboardMenuItems } from "@/util/localDb/navLink";
import classNames from "classnames";
import { motion as m } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useReducer } from "react";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const reducer = (state: any, action: { type: string }) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, toggleCollapse: true };

    case "!TOGGLE":
      return { ...state, toggleCollapse: false };
    case "COLLAPSE":
      return { ...state, isCollapsible: false };
    case "!COLLAPSE":
      return { ...state, isCollapsible: true };
    case "RENDER":
      return { ...state, re_render: true };
    case "!RENDER":
      return { ...state, re_render: false };

    default:
      throw Error("Unknown action.");
  }
};

const Sidebar = () => {
  const [state, dispatch] = useReducer(reducer, {
    toggleCollapse: false,
    isCollapsible: false,
    re_render: false,
  });

  const router = useRouter();
  const activeNavClass = useMemo(() => {
    return dashboardMenuItems.find((menu) => menu.link === router.pathname);
  }, [router.pathname]);

  const wrapperClasses = classNames(
    "h-screen pt-8 bg-slate-50 text-black relative",
    {
      ["w-80"]: !state.toggleCollapse,
      ["w-20"]: state.toggleCollapse,
    }
  );

  const getNavClass = (menu: { id: number; label: string; link: string }) => {
    return classNames(
      "flex items-center space-x-4 cursor-pointer hover:text-white shadow hover:bg-[var(--red-primary-brand-color)] rounded w-full overflow-hidden bg-gray-100 px-4 mt-3 py-2 transition-all duration-3000",
      {
        ["bg-red text-white"]: activeNavClass?.id === menu.id,
      }
    );
  };

  return (
    <section
      style={{
        transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s",
      }}
      className={wrapperClasses}
      onMouseEnter={() => {
        dispatch({ type: "COLLAPSE" });
      }}
      onMouseLeave={() => {
        dispatch({ type: "!COLLAPSE" });
      }}
    >
      <div className="flex flex-col justify-between px-8">
        <div className="flex justify-between">
          <span
            className={classNames({
              hidden: state.toggleCollapse,
            })}
          >
            {!state.toggleCollapse && (
              <div>
                <LightModeBrand />
              </div>
            )}
          </span>

          {!state.isCollapsible && (
            <m.button
              onClick={() =>
                state.toggleCollapse
                  ? dispatch({ type: "!TOGGLE" })
                  : dispatch({ type: "TOGGLE" })
              }
              className={`border-transparent text-white absolute  px-3 py-2 bg-red shadow  rounded-md outline-transparent ${
                state.toggleCollapse ? "left-3" : "right-10"
              }`}
            >
              <IoMdArrowDroprightCircle
                className={classNames("text-white", {
                  "rotate-180": !state.toggleCollapse,
                })}
              />
            </m.button>
          )}
        </div>
        <m.div className={`pt-8`}>
          {dashboardMenuItems.map(({ ...menu }) => {
            const classes = getNavClass(menu);
            return (
              <Link
                className="flex justify-between"
                key={menu.id}
                href={menu.link}
              >
                <div
                  className={`${
                    !state.toggleCollapse
                      ? classes
                      : classNames(
                          "bg-gray-100 mt-2 -ml-5 p-3  transition-all duration-3000",
                          {
                            ["bg-red text-white"]:
                              activeNavClass?.id === menu.id,
                          }
                        )
                  }`}
                >
                  <span>{menu.icon}</span>
                  {!state.toggleCollapse && <p>{menu.label}</p>}
                </div>
              </Link>
            );
          })}
        </m.div>
      </div>
    </section>
  );
};

export default Sidebar;
