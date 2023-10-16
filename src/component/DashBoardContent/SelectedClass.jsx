import useSelectCourse from "../../Hook/useSelectedCourse";
import {FaTrashAlt} from "react-icons/fa"
import { FaHandHoldingDollar } from "react-icons/fa6";
const SelectedClass = () => {
 const  [selectedCourse, refetch] = useSelectCourse()
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
                <td><button className="bg-white text-red-600"><FaTrashAlt/></button></td>
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
