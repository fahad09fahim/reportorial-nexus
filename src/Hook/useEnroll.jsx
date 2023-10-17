import  { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useEnroll = () => {
const {user} = useContext(AuthContext)
    const { refetch,data: enrolledCourse = [] } = useQuery({
        queryKey: ['enroll', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://reportorial-nexus-server.vercel.app/enroll?email=${user?.email}`)
            return res.json();
        },
    })
    return [enrolledCourse,refetch]
       
   
};

export default useEnroll;