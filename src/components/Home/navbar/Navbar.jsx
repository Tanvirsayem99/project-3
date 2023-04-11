import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='md:w-5/6 w-11/12 mx-auto mb-5'>
                      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 grid gap-5">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-lime-500' : '')}>Home</NavLink>
        <NavLink to="/statistics" className={({ isActive }) => (isActive ? 'text-lime-500' : '')}>Statistics</NavLink>
        <NavLink to="/jobs" className={({ isActive }) => (isActive ? 'text-lime-500' : '')}>Applied Jobs</NavLink>
        <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
        
      </ul>
    </div>
    <Link to="/"><a className="normal-case text-xl">Jobs Holder</a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <div className="menu menu-horizontal px-1 md:flex gap-10">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-lime-500' : '')}>Home</NavLink>
        <NavLink to="/statistics" className={({ isActive }) => (isActive ? 'text-lime-500' : '')}>Statistics</NavLink>
        <NavLink to="/jobs" className={({ isActive }) => (isActive ? 'text-lime-500' : '')}>Applied Jobs</NavLink>
        <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
    </div>
  </div>
  <div className="navbar-end">
    <a className="btn">Star Applying</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;