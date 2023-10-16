import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["course name", 11],
  ["course name", 2],
  ["course name", 2],
  ["Course name", 2],
  ["course name", 7],
];
const options = {
  title: "My Course Progress",
  is3D: true,
};
const StudentProgress = () => {
    return (
        <div className="w-full">
          <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"500px"}
    />
        </div>
    );
};

export default StudentProgress;