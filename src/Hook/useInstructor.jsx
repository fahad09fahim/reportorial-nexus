import{ useEffect, useState } from 'react';

const useInstructor = () => {
    const [instructor, setInstructor] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetch("instructor.json")
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setInstructor(data);
          }
          else 
          {
         setLoading(true)     
          }
        });
    }, []);
    return [instructor, loading];
  };


export default useInstructor;