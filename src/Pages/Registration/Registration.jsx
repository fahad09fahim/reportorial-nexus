import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from './../../providers/AuthProvider';

const Registration = () => {
    const {createUser} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
   createUser(data.email,data.password)
   .then(res=>{
    const user = res.user
    console.log(user)
   })
    console.log(data);
  };


  

  return (
    <div
      className="py-12"
      style={{
        background: `linear-gradient(45deg, hsla(217, 63%, 79%, 1) 20%, 
              hsla(186, 27%, 62%, 1) 70%, 
              hsla(120, 2%, 88%, 1) 100%`,
      }}
    >
      <div className="flex justify-center py-8">
        <div className="card w-96 md:w-[450px]  max-w-lg shadow-xl bg-white p-0 ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-center text-2xl font-semibold">
              Register Now...
            </h1>
            {/* -------------Name input---------------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered input-info"
                {...register("name", {
                  required: true,
                  maxLength:25
                })}
              />
              {/*------------------ invalid input error massage ---------------------------------*/}
              {errors.name && (
                <span className="text-red-500">
                  Please insert Name.
                </span>
              )}
            </div>
            {/* -------------email input---------------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered input-info"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                })}
              />
              {/*------------------ invalid input error massage ---------------------------------*/}
              {errors.email && (
                <span className="text-red-500">
                  Please insert valid email!
                </span>
              )}
            </div>
            {/* ----------------------password input field--------------------------------------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered input-info"
                {...register("password", { required: true,   pattern: {
                    value: /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/,
                    message: "Password must contain at least one uppercase letter and one special character with a minimum of 6 characters.",
                  }})}
              />
              {/*------------------------------invalid input error massage------------------------ */}
              {errors.password && (
                <span className="text-red-500">
                 {errors.password.message} 
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline">Login</button>
            </div>
          </form>
          <div className="divider">OR</div>
          <div className="hero-content">
            <h1>google</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
