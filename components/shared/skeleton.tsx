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
