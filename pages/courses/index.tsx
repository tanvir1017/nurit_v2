import Courses from "@/components/courses/courses";
import ExploreCourses from "@/components/courses/exploreCourses";

const CoursesPage = () => {
  return (
    <main className="App container font-HSRegular">
      <ExploreCourses />
      <Courses />
    </main>
  );
};

export default CoursesPage;
