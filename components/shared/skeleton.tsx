export const AuthorTableSkeleton = ({ children }: { children: any }) => {
  return (
    <div className="shadow rounded-md overflow-hidden h-screen  w-full px-2 border border-gray-800">
      <div className="animate-pulse overflow-clip">
        <div className="grid grid-cols-8 space-x-2 border-b-2 border-b-gray-800 p-4 dark:text-white text-black">
          <div className="h-6 dark:bg-slate-700 bg-slate-300 rounded-full col-span-3 "></div>
          <div className="h-6 dark:bg-slate-700 bg-slate-300 rounded-full "></div>
          <div className="h-6 dark:bg-slate-700 bg-slate-300 rounded-full "></div>
          <div className="h-6 dark:bg-slate-700 bg-slate-300 rounded-full "></div>
          <div className="h-6 dark:bg-slate-700 bg-slate-300 rounded-full "></div>
          <div className="h-6 dark:bg-slate-700 bg-slate-300 rounded-full "></div>
        </div>
        {children}
      </div>
    </div>
  );
};

export const UserSkeleton = () => {
  return (
    <div className="grid grid-cols-8 space-x-2  p-4 dark:text-white text-black border-b-2 border-b-gray-700">
      <div className="col-span-3 ">
        <div className="grid grid-cols-4 place-content-center">
          <div className="h-11 w-11 dark:bg-slate-700 bg-slate-300 rounded-full "></div>
          <div className="col-span-3 space-y-3">
            <div className="h-3 w-full dark:bg-slate-700 bg-slate-300 rounded-full  "></div>
            <div className="h-2 w-full dark:bg-slate-700 bg-slate-300 rounded-full "></div>
          </div>
        </div>
      </div>
      <div className="flex space-x-2 items-center">
        <div className="h-6 w-4 dark:bg-slate-700 bg-slate-300 "></div>
        <div className="h-6 w-full dark:bg-slate-700 bg-slate-300 "></div>
      </div>
      <div className="flex space-x-2 items-center">
        <div className="h-6 w-4 dark:bg-slate-700 bg-slate-300 "></div>
        <div className="h-6 w-full dark:bg-slate-700 bg-slate-300 "></div>
      </div>
      <div className="flex space-x-2 items-center">
        <div className="h-6 w-4 dark:bg-slate-700 bg-slate-300 "></div>
        <div className="h-6 w-full dark:bg-slate-700 bg-slate-300 "></div>
      </div>
      <div className="flex space-x-2 items-center">
        <div className="h-6 w-4 dark:bg-slate-700 bg-slate-300 "></div>
        <div className="h-6 w-full dark:bg-slate-700 bg-slate-300 "></div>
      </div>
      <div className="flex space-x-2 items-center">
        <div className="h-6 w-4 dark:bg-slate-700 bg-slate-300 "></div>
        <div className="h-6 w-full dark:bg-slate-700 bg-slate-300 "></div>
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="shadow rounded-md overflow-hidden h-[28rem] w-full">
      <div className="animate-pulse overflow-clip">
        <div className=" dark:bg-slate-700 bg-slate-300  w-[24rem] h-72"></div>
        <div className="flex-1 space-y-3 px-5 py-8 dark:bg-[var(--black-primary-brand-color)] bg-gray-900 border  dark:border-gray-800">
          <div className="h-4 dark:bg-slate-700 bg-slate-300 rounded-full"></div>
          <div className="space-y-3 ">
            <div className="h-4 dark:bg-slate-700 bg-slate-300 rounded-full"></div>

            <div className="grid grid-cols-4 gap-2">
              <div className="h-3 dark:bg-slate-700 bg-slate-300 rounded-full"></div>
              <div className="h-3 bg-transparent   rounded-full"></div>
              <div className="h-3 dark:bg-slate-700 bg-slate-300 rounded-full"></div>

              <div className="h-3 dark:bg-slate-700 bg-slate-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
