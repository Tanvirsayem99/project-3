import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleItem from '../SingleItem/SingleItem';

const FeaturedJobs = () => {
    // const [data, setData] = useState()
    const datas = useLoaderData();
   const someDatas = datas.slice(0,4)
   const [jobs, setJobs] = useState(someDatas)

   const handleShowBtn = () =>{
    setJobs(datas)
   }

    return (
        <div>
            <div>
            <div>
                <h3 className='text-center text-2xl font-semibold'>Featured Jobs</h3>
                <p className='text-sm text-center my-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 gap-5 md:w-5/6 mx-auto '>
                {
                    jobs.map(singleData => (<SingleItem key={singleData.id}  singleData={singleData}></SingleItem>))
                }
            </div>
            <div className='text-center my-5'>
            <button className='btn' onClick={handleShowBtn}>Show All</button>
            </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;