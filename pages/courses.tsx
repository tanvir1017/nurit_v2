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

const CoursesFetcher = () => {
  const { data, error } = useSWR(API);

  // there should be no `undefined` state
  console.log("Is data ready?", !!data);
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
          <h1>Total registerd user: {data.returnData.totalUser}</h1>
        </div>
      </section>
    );

  return <main className="App">{content}</main>;
};

export default function Courses({ fallback }: { fallback: any }) {
  return (
    <SWRConfig value={{ fallback }}>
      <CoursesFetcher />
    </SWRConfig>
  );
}
