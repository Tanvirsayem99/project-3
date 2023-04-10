import React from 'react';
import { Link } from 'react-router-dom';

const SingleItem = ({singleData, seam}) => {
    const {id, companyName, logo, jobTitle, remoteOrOnsite, location, salary, jobDescription, jobResponsibility, eductionalRequirments,
        experiences, contact} = singleData
    return (
        <div className='bg-slate-50 p-5 pl-10 grid gap-3'>
            <img src={logo} alt="" className='w-1/6'/>
            <h3>{jobTitle}</h3>
            <span>{companyName}</span>
            <div className='flex gap-5'>
            <div className='border-2 border-t-slate-200 px-2 py-1'>{remoteOrOnsite.status}</div>
            <div className='border-2 border-t-slate-200 px-2 py-1'>{remoteOrOnsite.status1}</div>
            </div>
            <div className='flex gap-20 my-5'>
            <div className='flex'><img src="https://cdn-icons-png.flaticon.com/512/484/484167.png" alt="" className='w-5'/><p>{location}</p></div>
             <div className='flex'><img src="https://cdn-icons-png.flaticon.com/512/3135/3135673.png" alt="" className='w-5' /><p>{salary}</p></div>
            </div>
            <Link to={`/details/${id}`} className="butoon w-28">View Details</Link>
            
        </div>
    );
};

export default SingleItem;