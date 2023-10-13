import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";



const SocialLogin = () => {
    const {signInWithGoogle}= useContext(AuthContext)
    const handleGoogle=()=>{

        signInWithGoogle()
        .then(res=>{
            const user = res.user;
console.log(user)
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