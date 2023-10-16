import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useSelectCourse from "../../Hook/useSelectedCourse";

const ClassCard = ({ course }) => {
  const { _id,name, image, instructorName, availableSeats, price } = course;
  const {user}= useContext(AuthContext)
  const [, refetch] = useSelectCourse();

  const handleSelectClass=(course)=>{
    // console.log(course)
    if(user && user.email){
      const selectedItem = {courseId:_id,name,instructorName,availableSeats,price,email:user.email}
     fetch('http://localhost:5000/selected',{
      method:'POST',
      headers:{
        "content-type": 'application/json'
      },
      body: JSON.stringify(selectedItem)
     })
     .then(res=>res.json())
     .then(data=>{
      if(data.insertedId){
        refetch()
        alert('course selected successfully')
      }
     })
    }
  }
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl my-3">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-3">
          <h2 className="card-title uppercase text-sm font-bold">{name}</h2>
          <p>Instructor: {instructorName}</p>
          <p>Available seats: {availableSeats}</p>
          <p>Price: ${price}</p>
          <div className="card-actions justify-start">
            <button onClick={()=>handleSelectClass(course)} className="btn btn-outline bg-sky-400 text-white hover:bg-slate-200 hover:text-black ">Select Class</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
