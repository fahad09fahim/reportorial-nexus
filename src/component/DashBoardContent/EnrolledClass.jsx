import useEnroll from "../../Hook/useEnroll";


const EnrolledClass = () => {
  const[enrolledCourse,refetch] = useEnroll()
refetch()


    return (
        <div className=" border border-red-200 rounded-md p-2 shadow-xl"> 
          <h1 className="text-3xl text-center">Enrolled Class:</h1>
           <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>instructor</th>
        <th>time</th>
        <th>Go to Class</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
      {
      
      enrolledCourse.map((course,index)=>
      <tr key={course._id}>
         <th >{index+1}</th>
      <td>{course.name}</td>
      <td>{course.instructorName}</td>
      <td>will be announced</td>
      <td><button>Go</button></td>
      </tr>
      )
      
      
      }

        
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default EnrolledClass;