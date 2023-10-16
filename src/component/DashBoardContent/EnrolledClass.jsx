

const EnrolledClass = () => {
    return (
        <div>
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