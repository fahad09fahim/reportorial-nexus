import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const SocialLogin = () => {
    const {signInWithGoogle}= useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogle=()=>{

        signInWithGoogle()
        .then(res=>{
            const user = res.user;

            if(user){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User Login successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            }
        })
    }
    // ----------------------------------------------
   

    // ----------------------------------------------
    return (
           <div>
             <button onClick={handleGoogle}> <FcGoogle className="h-9 w-9"/></button>
           
           </div>
    );
};

export default SocialLogin;