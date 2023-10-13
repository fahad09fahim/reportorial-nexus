import { Link } from "react-router-dom";
import './NavBar.css'

const Navbar = () => {
  const navList = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link to="/class">Classes</Link>
      </li>
      <li>
        <Link> Instructors</Link>
      </li>
    </>
  );
  return (
    <div className="navbar hexaBg text-white max-w-screen-xl rounded-b-xl px-8 shadow-lg fixed z-10">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-500 rounded-b-lg w-52"
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
       <Link to='/login'>Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
