import { Link } from "react-router-dom";
import './NavBar.css'
import { useContext } from "react";
import { AuthContext } from './../../../providers/AuthProvider';

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)

  const handleLogout=()=>{
    return logOut()
    .then(res=>console.log(res))
  }
  const navList = (
    <div className="flex flex-col lg:flex-row gap-3 ">
    
        <Link className="btn btn-ghost hover:text-red-400 " >Home</Link>
     
   
        <Link  className="btn btn-ghost hover:text-red-400 " to="/class">Course</Link>
   
   
        <Link className="btn btn-ghost hover:text-red-400 " > Instructors</Link>
  
      
    </div>
  );
  return (
    <div className="navbar hexaBg text-white h-8  px-8 shadow-lg  fixed  z-10 ">
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-700 rounded-b-lg w-52"
          >
            {navList}
          </ul>
        </div>
      </div>
      <div className="navbar-center lg:navbar-start ms-0 md:ms-9">
        <div className="flex justify-center items-center gap-1 font-serif border-b-2 border-gray-800">
          <span className="text-lg font">The</span>
          <span className="font-semibold">Reportorial</span>
          <span className="block">Nexus</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
      <div className="navbar-end">
        {
          user?<>
          <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn  btn-circle  avatar">
            <div className="w-10 rounded-full">
              <img src={user.photoURL} />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-black text-white rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
              </a>
            </li>
            <li><Link  to='/dashboard'>DashBoard</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </ul>
        </div>
          </>
    :<Link className="btn btn-ghost hover:text-red-400 " to='/login'>Login</Link>
        }
       
      </div>
    </div>
  );
};

export default Navbar;
