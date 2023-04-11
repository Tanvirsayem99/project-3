import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredData } from '../../Utils/FakeDb';
import StoredJobs from '../StoredJobs/StoredJobs';

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
            <div className='bg-slate-200 h-[25vh] flex justify-center items-center'>
                <h1 className='text-center font-semibold text-2xl'>Applied Jobs</h1>
            </div>
            <div className='flex gap-5 mt-5 mb-2 ml-auto w-40 mr-28'>
                <button onClick={()=>remoteFilterHandler ()} className="bg-orange-200 py-1 px-3 rounded-md">remote</button>
                <button onClick={()=>onsiteFilterHandler()} className="bg-orange-200 py-1 px-3 rounded-md">onsite</button>
            </div>
            <div>
            {
                filterData.map(e => (<StoredJobs key={e.id} e={e}></StoredJobs>))
            }
        </div>
        </div>
    );
};

export default AppJobs;