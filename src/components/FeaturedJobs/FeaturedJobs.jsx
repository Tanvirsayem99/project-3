import React, { useEffect, useState } from 'react';
import { getData } from '../../Utils/FakeDb';
import SingleItem from '../SingleItem/SingleItem';

const FeaturedJobs = () => {
    const [datas, setdatas] = useState([])
   
    
    useEffect(()=>{
        fetch('featured.json').then(res => res.json()).then(items => setdatas(items))
    },[])
    
    return (
        <div>
            <div>
            <div>
                <h3 className='text-center text-2xl font-semibold'>Featured Jobs</h3>
                <p className='text-sm text-center my-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 gap-5 md:w-5/6 mx-auto '>
                {
                    datas.map(singleData => (<SingleItem key={singleData.id}  singleData={singleData}></SingleItem>))
                }
            </div>
            <div className='text-center my-5'>
            <button className='btn '>Show All</button>
            </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;