import Courses from "@/components/courses/courses/courses";
import ExploreCourses from "@/components/courses/courses/exploreCourses";

const CoursesPage = () => {
  return (
    <main className="App m-14 font-HSRegular">
      <ExploreCourses />
      <Courses />
    </main>
  );
};

export default CoursesPage;
