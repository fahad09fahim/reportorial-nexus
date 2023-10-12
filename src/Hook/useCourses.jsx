import  { useEffect, useState } from "react";

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setCourses(data);
        }
        else 
        {
       setLoading(true)     
        }
      });
  }, []);
  return [courses, loading];
};

export default useCourses;
