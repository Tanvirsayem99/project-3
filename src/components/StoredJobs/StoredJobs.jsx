import React from 'react';

const StoredJobs = ({e, key}) => {
    // const {id, companyName, logo, jobTitle, remoteOrOnsite, location, salary, jobDescription, jobResponsibility, eductionalRequirments,
    //     experiences, contact} = e;
    return (
        <div>
           {
            e.map(s => (<div key={s.id}>
                <img src={s.logo} alt="" className='w-1/6'/>
            <h3>{s.jobTitle}</h3>
            <span>{s.companyName}</span>
            <div className='flex gap-5'>
            <div className='border-2 border-t-slate-200 px-2 py-1'>{s.remoteOrOnsite.status}</div>
            <div className='border-2 border-t-slate-200 px-2 py-1'>{s.remoteOrOnsite.status1}</div>
            </div>
            <div className='flex gap-20 my-5'>
            <div className='flex'><img src="https://cdn-icons-png.flaticon.com/512/484/484167.png" alt="" className='w-5'/><p>{s.location}</p></div>
             <div className='flex'><img src="https://cdn-icons-png.flaticon.com/512/3135/3135673.png" alt="" className='w-5' /><p>{s.salary}</p></div>
            </div>
            </div>))
           }
            
        </div>
    );
};

export default StoredJobs;