import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from './../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from "../../component/SocialLogin/SocialLogin";
import Swal from "sweetalert2";

const Login = () => {
    const {logIn}= useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    logIn(data.email, data.password)
    .then(result=>{
        const user = result.user;
        // console.log(user)
        if(user){
          Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Login successfully',
          showConfirmButton: false,
          timer: 1500
        })
           navigate(from, { replace: true })
        }
        
    })
    console.log(data)
  };

  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{
          background: `linear-gradient(45deg, hsla(217, 63%, 79%, 1) 20%, 
            hsla(186, 27%, 62%, 1) 70%, 
            hsla(120, 2%, 88%, 1) 100%`,
        }}
      >
        <div className="hero-content p-0 mt-12 ">
          <div className="card w-80 md:w-96 max-w-sm shadow-2xl bg-white ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-center text-2xl font-semibold">Login Now</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  })}
                />
                {/*------------------ invalid input error massage ---------------------------------*/}
                {errors.email && (
                  <span className="text-amber-400">
                    Please insert valid email!
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {/*------------------------------invalid input error massage------------------------ */}
                {errors.password && (
                  <span className="text-amber-400">
                    Please insert valid password!
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline">Login</button>
              </div>
            </form>
            <div className="hero-content"><span className="text-xs md:text-sm font-medium ">New to Reportorial News? <Link to='/register' className="text-info">Create an account</Link></span></div>
            <div className="divider">OR</div>
            <div className="hero-content">
              <SocialLogin/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
