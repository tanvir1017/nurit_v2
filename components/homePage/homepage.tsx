import ContactUs from "./contactUs/contactUs";
import HeadingSection from "./heading/headingSection";
import OurAchievement from "./ourAchievement/ourAchievement";
import OurSpecialty from "./ourSpecialty/ourSpecialty";
import ProcessOfStartCourse from "./processOfStartCourse/processOfStartCourse";
import SetYourSkill from "./setYourSkill/setYourSkill";
import Testimonial from "./testimonial/testimonial";
import TrendyCourses from "./trendyCourse/trendyCourses";

const Homepage = () => {
  return (
    <>
      <HeadingSection />
      <TrendyCourses />
      <SetYourSkill />
      <OurAchievement />
      <OurSpecialty />
      <ProcessOfStartCourse />
      <Testimonial />
      <ContactUs />
    </>
  );
};

export default Homepage;