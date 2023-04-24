import Metadata from "@/util/SEO/metadata";
import Layout from "./layout";

const Courses = () => {
  return (
    <>
      <Metadata
        title="Dashboard | Manage courses"
        name="Dashboard panel for admin and specific Member"
        content="all course page. You can find every course in this page that we are providing"
        // key="skill course, course, ms office, office 364"
      />
      <Layout>courses</Layout>
    </>
  );
};

export default Courses;
