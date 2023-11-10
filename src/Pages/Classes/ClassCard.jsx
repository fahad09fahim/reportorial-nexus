import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useSelectCourse from "../../Hook/useSelectedCourse";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const ClassCard = ({ course }) => {
  const { _id,name, image, instructorName, availableSeats, price } = course;

  const [isClassSelected, setIsClassSelected] = useState(false);
  const {user}= useContext(AuthContext)
  const [, refetch] = useSelectCourse();
 const navigate = useNavigate()
 const location = useLocation()
  const handleSelectClass=(course)=>{
    // console.log(course)
    if (isClassSelected) {
      return;
    }
    if(user && user.email){
      const selectedItem = {courseId:_id,name,instructorName,availableSeats,price,email:user.email}
     fetch('https://reportorial-nexus-server.up.railway.app/selected',{
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
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your selected course has been added',
          showConfirmButton: false,
          timer: 1500
        })
      }})}
      else{
        Swal.fire({
          title: 'Please login to select course',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login now!'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}})
          }
        })
     
      }
      setIsClassSelected(true);
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
            <button  disabled={isClassSelected} onClick={()=>handleSelectClass(course)} className={`btn btn-outline bg-sky-400 text-white hover:bg-slate-200 hover:text-black ${isClassSelected ? 'cursor-not-allowed' : ''}`}>Select Class</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
