import Metadata from "@/util/SEO/metadata";
import Layout from "../layout";

const Home = () => {
  return (
    <>
      <Metadata
        title="Dashboard | Home"
        name="Dashboard panel for admin and specific Member"
        content="all course page. You can find every course in this page that we are providing"
        // key="skill course, course, ms office, office 364"
      />
      <Layout>Dashboard Home</Layout>
    </>
  );
};

export default Home;
