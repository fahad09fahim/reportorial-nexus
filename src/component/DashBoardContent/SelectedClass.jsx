const SelectedClass = () => {
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
            <tr>
              <th>1</th>
              <td>Course name</td>
              <td>$250</td>
              <td>delete</td>
              <td>Pay</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;
