
import useInstructor from "../../Hook/useInstructor";

const PopularInstructor = () => {
  const [instructor] = useInstructor();
  return (
    <div className="p-14">
      <h1 className="text-center text-3xl font-semibold"><span className="border-b-4 border-blue-500">Popular Instructor</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-3 m-5 md:m-20  gap-9" >
        {
            instructor.map(i=><div key={i._id} className="card  w-full md:w-80 bg-base-100 shadow-xl  ">
            <figure>
              <img
              className="h-56 w-auto rounded-xl"
                src={i.image}
                alt="Album"
              />
            </figure>
            <div className="card-body text-center font-semibold">
              <h2>{i.name}</h2>
              <h2>{i.email}</h2>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default PopularInstructor;
