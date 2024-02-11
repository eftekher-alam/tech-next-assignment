import { Link, NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {

    const navItems = <>
        <li><NavLink to={"/"}>HOME</NavLink></li>
    </>
    return (

        <div className="navbar bg-base-100 fixed z-10 shadow-lg max-w-screen-2xl mx-auto">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to={"/"}
                    className="font-bold text-xl md:text-3xl tracking-wide md:tracking-widest lg:ml-8 text-[#ff6c6c]"
                >Technext <span className="text-[#7d5fff]">Assignment</span></Link>
            </div>
            <div className="navbar-end lg:mr-8">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default NavBar;