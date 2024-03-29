import Metadata from "@/util/SEO/metadata";
import ContactUs from "./contactUs/contactUs";
import HeadingSection from "./heading/headingSection";
import JoinWithUs from "./joinwithus/joinWithUs";
import OurAchievement from "./ourAchievement/ourAchievement";
import OurSpecialty from "./ourSpecialty/ourSpecialty";
import ProcessOfStartCourse from "./processOfStartCourse/processOfStartCourse";
import SetYourSkill from "./setYourSkill/setYourSkill";
import TrendyCourses from "./trendyCourse/trendyCourses";

const Homepage = () => {
  return (
    <>
      <Metadata title="NurIT | Home" content="" name="" />
      <HeadingSection />
      <TrendyCourses />
      <SetYourSkill />
      <OurAchievement />
      <OurSpecialty />
      <ProcessOfStartCourse />
      <JoinWithUs />
      <ContactUs />
      {/* <Testimonial /> */}
    </>
  );
};

export default Homepage;
