import  { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useEnroll = () => {
const {user} = useContext(AuthContext)
    const { data: enrolledCourse = [] } = useQuery({
        queryKey: ['enroll', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/enroll?email=${user?.email}`)
            return res.json();
        },
    })
    return [enrolledCourse]
       
   
};

export default useEnroll;