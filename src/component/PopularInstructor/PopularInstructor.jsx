
import useInstructor from "../../Hook/useInstructor";

const PopularInstructor = () => {
  const [instructor] = useInstructor();
  return (
    <div >
      <h1 className="text-center text-3xl font-semibold"><span className="border-b-4 border-blue-500">Popular Instructor</span></h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto p-5" >
        {
            instructor.map(i=><div key={i._id} className="card  overflow-hidden   bg-base-100 shadow-xl  ">
            <figure>
              <img
              className="w-full h-64 object-cover hover:scale-110 duration-1000"
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
