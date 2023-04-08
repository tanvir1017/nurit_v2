import { apiUrl } from "@/util/api";
import { DashBoardAuthorTableType } from "@/util/types/types";
import { GetStaticProps } from "next";
import useSWR, { SWRConfig } from "swr";
import Layout from "../layout";
import AuthorTable from "./authorTable";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const API = "/api/auth";

interface UserDataType {
  id: string;
  createdAt: string;
  first__name: string;
  last__name: string;
  email__id: string;
  photo__URL: string;
  phone__numb: number;
  gender: string;
  role: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetcher(`${apiUrl}/api/auth`);
  return {
    props: {
      fallback: {
        [API]: data,
      },
    },
  };
};

export const UsersFetcher = () => {
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
          <div className="TOTAL_USER w-full  dark:text-white text-black rounded-2xl h-screen overflow-auto p-2 border">
            <div className="grid grid-cols-8 space-x-2 border-b-2 p-3 dark:text-white text-black">
              <p className="col-span-3 place-content-start flex items-center">
                AUTHOR
              </p>
              <p>FUNCTION</p>
              <p>GENDER</p>
              <p>CONTACT</p>
              <p>REGISTERED</p>
              <p>STATUS</p>
            </div>
            {data.returnData.users.map(
              (user: DashBoardAuthorTableType, i: number) => (
                <AuthorTable key={i} user={user} />
              )
            )}
          </div>
        </div>
      </section>
    );

  return (
    <Layout>
      <main className="App">{content}</main>
    </Layout>
  );
};

export default function Users({ fallback }: { fallback: any }) {
  return (
    <SWRConfig value={{ fallback }}>
      <UsersFetcher />
    </SWRConfig>
  );
}
