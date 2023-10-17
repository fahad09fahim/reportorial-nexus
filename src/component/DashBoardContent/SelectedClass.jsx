import useSelectCourse from "../../Hook/useSelectedCourse";
import {FaTrashAlt} from "react-icons/fa"
import { FaHandHoldingDollar } from "react-icons/fa6";
import Swal from "sweetalert2";
const SelectedClass = () => {
 const  [selectedCourse, refetch] = useSelectCourse()

 const handleDelete = (course)=>{
if(course){
  Swal.fire({
    title: 'Are you sure?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {

      fetch(`http://localhost:5000/selected/${course._id}`,{
        method:'DELETE'
      })
      .then(res=> res.json())
      .then(data=>{
        if(data.deletedCount>0 ){
          refetch()
Swal.fire(
        'Deleted!',
        'Your course has been deleted.',
        'success'
      )
        }
      })
      
    }
  })
}

 }
  return (
    <div className=" w-full">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>price</th>
              <th>Action</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              selectedCourse.map((course,index)=><tr key={course._id}>
                <th>{index+1}</th>
                <td>{course.name}</td>
                <td>${course.price}</td>
                <td><button onClick={()=>handleDelete(course)} className="bg-white text-red-600"><FaTrashAlt/></button></td>
                <td><button className="bg-white text-green-700"><FaHandHoldingDollar/></button></td>
              </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;
