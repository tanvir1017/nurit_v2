import { GetStaticProps } from "next";

type CoursePageProps = {
  data: {
    success: boolean;
    message: string;
    returnData: {
      totalUser: number;
      users: {}[];
    };
  };
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: { data: CoursePageProps };
}> => {
  const res = await fetch("http://localhost:3000/api/users");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const Courses = ({ data }: CoursePageProps) => {
  return (
    <main className="App">
      <section className="container">
        <div>
          <h1>Total registerd user: {data.returnData.totalUser}</h1>
        </div>
      </section>
    </main>
  );
};

export default Courses;
