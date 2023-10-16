import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'

const useSelectCourse = ()=>{
    const {user}= useContext(AuthContext)

    const { refetch, data: selectedCourse = [] } = useQuery({
        queryKey: ['selected', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/selected?email=${user?.email}`)
            return res.json();
        },
    })
    return [selectedCourse, refetch]
}
 export default useSelectCourse