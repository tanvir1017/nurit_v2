import { GetStaticProps } from "next";
import useSWR, { SWRConfig } from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const API = "https://nurit-v2.vercel.app/api/users";

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetcher(API);
  return {
    props: {
      fallback: {
        [API]: data,
      },
    },
  };
};

const UsersFetcher = () => {
  const { data, error } = useSWR(API);
  let content = null;
  if (error) {
    content = "An error has occurred.";
  }
  if (!data) {
    content = "Loading...";
  }
  if (!error && data)
    content = (
      <section className="container">
        <div>
          <h1>Total registerer user: {data.returnData.totalUser}</h1>
          <div className="grid grid-cols-4">
            <div className="shadow rounded-md overflow-hidden h-[28rem]">
              <div className="animate-pulse  overflow-clip">
                <div className=" bg-slate-700 w-[24rem] h-72"></div>
                <div className="flex-1 space-y-3 px-5 py-8 bg-[var(--black-primary-brand-color)] border border-gray-800">
                  <div className="h-4 bg-slate-700 rounded-full"></div>
                  <div className="space-y-3 ">
                    <div className="h-4 bg-slate-700 rounded-full"></div>

                    <div className="grid grid-cols-4 gap-2">
                      <div className="h-3 bg-slate-700 rounded-full"></div>
                      <div className="h-3 bg-transparent   rounded-full"></div>
                      <div className="h-3 bg-slate-700 rounded-full"></div>

                      <div className="h-3 bg-slate-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

  return <main className="App">{content}</main>;
};

export default function Users({ fallback }: { fallback: any }) {
  return (
    <SWRConfig value={{ fallback }}>
      <UsersFetcher />
    </SWRConfig>
  );
}
