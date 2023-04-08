import { apiUrl } from "@/util/api";
import { GetStaticProps } from "next";
import { FaRegUserCircle } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useSWR, { SWRConfig } from "swr";
import Layout from "./layout";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const API = "/api/auth";

interface UserDataType {
  id: string;
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
          <div className="USER_STATICS grid grid-cols-3 gap-5 my-3">
            <div className="bg-red-500 text-white  p-3 rounded-lg">
              <p>Total registerer user: {data.returnData.totalUser}</p>
            </div>
            <div className="bg-red-500 text-white  p-3 rounded-lg">
              <p>Available admin: {data.returnData.totalUser}</p>
            </div>
          </div>
          <div className="TOTAL_USER w-full bg-gray-500 rounded-2xl h-screen overflow-auto p-2">
            {data.returnData.users.map((user: object) => {
              const {
                id,
                first__name,
                last__name,
                email__id,
                photo__URL,
                phone__numb,
                gender,
                role,
              } = user as UserDataType;
              return (
                <div
                  key={id}
                  className="p-2 border border-black hover:bg-gray-600 flex shadow space-x-2 items-center rounded-lg"
                >
                  <div className="">
                    <LazyLoadImage
                      className="rounded-full w-16 h-16 object-cover"
                      alt={first__name}
                      src={photo__URL} // use normal <img> attributes as props
                      effect="blur"
                    />
                  </div>
                  <p className="flex items-center">
                    <span>
                      <FaRegUserCircle />
                    </span>{" "}
                    {first__name} {last__name}
                  </p>
                  <p> {email__id}</p>
                  <p>{role}</p>
                  <p>{gender}</p>
                  <p>{phone__numb}</p>
                </div>
              );
            })}
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
