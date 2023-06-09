import React from 'react';
import { Link } from 'react-router-dom';

const StoredJobs = ({e}) => {
    const {id, companyName, logo, jobTitle, remoteOrOnsite, location, salary, jobDescription, jobResponsibility, eductionalRequirments,
        experiences, contact} = e;
    return (
        <div>
           
            <div className='border border-slate-200 flex w-5/6 mx-auto gap-10 p-5 md:flex-row flex-col items-center '>
                <div className='bg-slate-100 md:w-1/6 p-5'>
                <img src={logo} alt="" className='w-full'/>
                </div>
           <div>
           <h3 className='font-semibold mb-2 md:text-left text-center'>{jobTitle}</h3>
            <div className='md:text-left text-center'>
            <span>{companyName}</span>
            </div>
            <div className='flex gap-5 my-3 md:w-auto md:justify-start justify-center'>
            <div className='border-2 border-t-slate-200  h-10 px-2 pt-1 '>{remoteOrOnsite.status}</div>
            <div className='border-2 border-t-slate-200 h-10 px-2 pt-1'>{remoteOrOnsite.status1}</div>
            </div>
            <div className='flex gap-5 pt-5 md:flex-row flex-col'>
            <div className='flex'><img src="https://cdn-icons-png.flaticon.com/512/484/484167.png" alt="" className='w-5'/><p>{location}</p></div>
             <div className='flex'><img src="https://cdn-icons-png.flaticon.com/512/3135/3135673.png" alt="" className='w-5' /><p>{salary}</p></div>
            </div>
            </div>
            <Link to={`/details/${id}`} className="md:ml-auto my-auto butoon">View Details</Link>
           </div>
           
            
        </div>
    );
};

export default StoredJobs;