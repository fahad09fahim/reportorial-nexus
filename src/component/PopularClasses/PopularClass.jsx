import useCourses from "./../../Hook/useCourses";
import { useNavigate } from 'react-router-dom';

const PopularClass = () => {
  const [courses] = useCourses();
  const limitedCourses = courses.slice(0, 3);
  const navigate = useNavigate()
  const goToClass=()=>{
navigate('/class')
window.scrollTo({
    top: 500,
   
    behavior: "smooth",
  });
  }
  return (
    <div className="text-center m-5 ">
        <h1 className="text-3xl uppercase font-semibold"><span className="border-b-4 border-blue-500">Popular Courses</span></h1>
        <div className="flex flex-col md:flex-row  justify-center items-center gap-4  m-4">
      {limitedCourses.map((course) => (
        <div key={course}>
          <div className="card w-80 bg-base-100 shadow-xl my-3">
            <figure>
              <img src={course.image} alt="Shoes" />
            </figure>
            <div className="card-body p-3 text-start">
              <h2 className="card-title uppercase text-sm font-bold">
                {course.name}
              </h2>
              <h2>Instructor: {course.instructorName}</h2>
              <h2>Available seats: {course.availableSeats}</h2>
              <h2>Price: ${course.price}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
    <button className="btn btn-outline bg-sky-400 text-white hover:bg-slate-200 hover:text-black " onClick={goToClass}>show more</button>
    </div>
  );
};

export default PopularClass;
