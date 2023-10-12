
import useCourses from "../../Hook/useCourses";
import courseBanner from "../../assets/courseBanner.png";
import ClassCard from "./ClassCard";


const Class = () => {
const [courses] = useCourses()

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <img src={courseBanner} alt="" />
      </div>
      <div>
        <h1 className="text-center text-5xl text-white font-semibold my-3 border-b-2 border-white">
          Our Courses
        </h1>
      </div>
     <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
     {courses.map((course) => (
        <ClassCard key={course.id} course={course}></ClassCard>
      ))}
     </div>
    </div>
  );
};

export default Class;
