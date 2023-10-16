import { useContext } from "react";
import Content from "../component/DashBoardContent/Content/Content";
import { AuthContext } from './../providers/AuthProvider';
import { Link, useNavigate } from "react-router-dom";

const DashBoard = () => {
    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout=()=>{
        logOut()
        .then((res)=>{
            console.log(res)
            navigate('/')
        })
    }
  const navList = (
    <>

      {/* todo: dynamic for both admin and instructor */}
      <li>
        <Link to='/' > Home</Link>
      </li>
      <li>
        <Link to='/class' >Courses</Link>
      </li>
      <li>
        <button onClick={handleLogout} >logout</button>
      </li>
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-black text-white">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">DashBoard</div>
          <div className=" flex-grow hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}

              {navList}
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <Content />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          {navList}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
