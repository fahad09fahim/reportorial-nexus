

const EnrolledClass = () => {
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
      <tr>
        <th>1</th>
        <td>Course name</td>
        <td>adele</td>
        <td>dynamic</td>
        <td>compo</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default EnrolledClass;