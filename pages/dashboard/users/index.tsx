import Metadata from "@/util/SEO/metadata";
import { apiUrl } from "@/util/api";
import { DashBoardAuthorTableType } from "@/util/types/types";

import { GetServerSideProps } from "next";
import useSWR, { SWRConfig } from "swr";
import Layout from "../layout";
import AuthorTable from "./authorTable";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());
const API = "/api/auth";

export const getServerSideProps: GetServerSideProps = async () => {
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
  const { data, error, isLoading, isValidating } = useSWR(API);
  console.log(data);
  let content = null;
  if (!data && !isLoading && !isValidating && error) {
    content = "An error has occurred.";
  }

  if (!error && !data && !isValidating && isLoading) {
    content = "Loading...";
  }
  if (!error && !isLoading && !isValidating && data) {
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

            <div>
              {data.returnData.users.map(
                (user: DashBoardAuthorTableType, i: number) => (
                  <AuthorTable key={i} user={user} />
                )
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <Layout>
      <Metadata
        title="Dashboard | Manage users"
        name="Dashboard panel for admin and specific Member"
        content="all course page. You can find every course in this page that we are providing"
        // key="skill course, course, ms office, office 364"
      />
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
