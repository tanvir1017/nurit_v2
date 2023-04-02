import Metadata from "@/util/SEO/metadata";
import Layout from "./layout";

const Dashboard = () => {
  return (
    <>
      <Metadata
        title="Dashboard | Home"
        name="Dashboard panel for admin and specific Member"
        content="all course page. You can find every course in this page that we are providing"
        // key="skill course, course, ms office, office 364"
      />
      <main className="font-HSRegular">
        <Layout>Hom</Layout>
      </main>
    </>
  );
};

export default Dashboard;
