import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredData } from '../../Utils/FakeDb';
import StoredJobs from '../StoredJobs/StoredJobs';
import vector from '../../../public/vector.png';
import vectorOne from '../../../public/vector-1.png';

const AppJobs = () => {
    const storedJobs = useLoaderData();
    let cart = []
    const [filterData, setFilterData] = useState(cart)
    const storedAppliedJob = getStoredData()
      
    for(const id in storedAppliedJob){
       const storedItems = storedJobs.find(e => e.id === id)
         if(storedItems){
            cart.push(storedItems)
        }
    }

    const onsiteFilterHandler =() =>{
        const filterOnsite = cart.filter(e => e.remoteOrOnsite.status === 'Onsite');
        setFilterData(filterOnsite)
    }
    const remoteFilterHandler =() =>{
        const filterOnsite = cart.filter(e => e.remoteOrOnsite.status === 'Remote');
        setFilterData(filterOnsite)
    }    
    return (
        <div>
            <div className='bg-slate-200 flex h-[17vh] justify-center items-center'>
            <img src={vectorOne} alt="" className='absolute right-0 md:w-60 w-32'/>
                <h1 className='text-center font-semibold text-2xl'>Applied Jobs</h1>
                <img src={vector} alt="" className='absolute top-32 md:top-auto left-0 md:w-60 w-32'/>
            </div>
            
            <div className='grid gap-5 my-5 bg-white'>
            <div className='flex md:flex-row flex-col gap-5 mt-5 mb-2 ml-auto w-40 mr-28 bg-white'>
                <button onClick={()=>remoteFilterHandler ()} className="bg-orange-200 py-1 px-3 rounded-md">remote</button>
                <button onClick={()=>onsiteFilterHandler()} className="bg-orange-200 py-1 px-3 rounded-md">onsite</button>
            </div>
            {
                filterData.map(e => (<StoredJobs key={e.id} e={e}></StoredJobs>))
            }
        </div>
        </div>
    );
};

export default AppJobs;