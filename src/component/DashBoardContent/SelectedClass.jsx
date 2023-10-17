import useSelectCourse from "../../Hook/useSelectedCourse";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SelectedClass = () => {
  const [selectedCourse, refetch] = useSelectCourse();
  const total = selectedCourse.reduce((sum, course) => course.price + sum, 0);

  const handleDelete = (course) => {
    if (course) {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/selected/${course._id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                refetch();
                Swal.fire(
                  "Deleted!",
                  "Your course has been deleted.",
                  "success"
                );
              }
            });
        }
      });
    }
  };
  return (
    <div className=" w-full border border-red-200 rounded-md p-2 shadow-xl ">
      <h1 className="text-center text-4xl">Selected Course:</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {selectedCourse.length > 0 ? (
              selectedCourse.map((course, index) => (
                <tr key={course._id}>
                  <th>{index + 1}</th>
                  <td>{course.name}</td>
                  <td>${course.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(course)}
                      className="bg-white text-red-600"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))
              

            ) : (
              <span className="text-xl">No course has been selected!</span>
            )}
          </tbody>
          <tfoot>
            <th></th>
            <th>Sum:</th>
            <th>${total}</th>
            <th>
             {total>0 && <Link to='/payment'className="btn btn-xs bg-white text-green-700 rounded-lg  border-green-400">Pay</Link>}
            </th>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;
