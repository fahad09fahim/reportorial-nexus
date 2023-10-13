const Login = () => {


    
  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{
          background:
            `linear-gradient(45deg, hsla(217, 63%, 79%, 1) 20%, 
            hsla(186, 27%, 62%, 1) 70%, 
            hsla(120, 2%, 88%, 1) 100%`,
        }}
      >
        <div className="hero-content p-0 mt-12 ">
          <div className="card w-80 md:w-96 max-w-sm shadow-2xl bg-white ">
            <form className="card-body">
              <h1 className="text-center text-2xl font-semibold">Login Now</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
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
            <div className="divider">OR</div>
            <div className="hero-content">
              <h1>google</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
