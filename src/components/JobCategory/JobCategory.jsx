import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategory from '../SingleCategory/SingleCategory';

const JobCategory = () => {
    const [job, setJob] = useState([]);
    useEffect(()=>{
        fetch('job.json').then(res => res.json()).then(items => setJob (items))
    },[])
    return (
        <div className='my-28'>
            <div>
                <h3 className='text-center text-2xl font-semibold'>Job Category List</h3>
                <p className='text-sm text-center my-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='flex gap-10 md:w-5/6 w-11/12 mx-auto'>
                {
                    job.map(e => (<SingleCategory key={e.id} e={e}></SingleCategory>))
                }
            </div>
        </div>
    );
};

export default JobCategory;