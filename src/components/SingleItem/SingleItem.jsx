import React from 'react';
import { Link } from 'react-router-dom';

const SingleItem = ({singleData}) => {
    const {id, companyName, logo, jobTitle, remoteOrOnsite, location, salary, jobDescription, jobResponsibility, eductionalRequirments,
        experiences, contact} = singleData
    return (
        <div className='bg-slate-50 '>
            <div className='p-5 pl-10 grid gap-3 '>
            <img src={logo} alt="" className='w-1/6'/>
            <h3 className='font-semibold '>{jobTitle}</h3>
            <span>{companyName}</span>
            <div className='flex gap-5'>
            <div className='border-2 border-t-slate-200 px-2 py-1'>{remoteOrOnsite.status}</div>
            <div className='border-2 border-t-slate-200 px-2 py-1'>{remoteOrOnsite.status1}</div>
            </div>
            <div className='flex md:flex-row flex-col gap-5 md:gap-20 my-5'>
            <div className='flex gap-3'><img src="https://cdn-icons-png.flaticon.com/512/484/484167.png" alt="" className='w-5'/><p>{location}</p></div>
             <div className='flex gap-3'><img src="https://cdn-icons-png.flaticon.com/512/3135/3135673.png" alt="" className='w-5' /><p>Salary: {salary}</p></div>
            </div>
            <Link to={`/details/${id}`} className="butoon md:w-28 text-center">View Details</Link>
            </div>
            
        </div>
    );
};

export default SingleItem;