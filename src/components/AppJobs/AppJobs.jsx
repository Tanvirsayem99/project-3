import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredData } from '../../Utils/FakeDb';
import StoredJobs from '../StoredJobs/StoredJobs';

const AppJobs = () => {
    const storedJobs = useLoaderData();
    let cart = []
    const [afra, setAfra] = useState(cart)
    const sayem = getStoredData()
    
    
        for(const id in sayem){
            const storedItems = storedJobs.find(e => e.id === id)
            if(storedItems){
                cart.push(storedItems)
            }
        }


    
    const clicker =() =>{
        const filterOnsite = cart.filter(e => e.remoteOrOnsite.status === 'Onsite');
        console.log(filterOnsite)
        setAfra(filterOnsite)
    }


    

    

    
    return (
        <div>
            <div className='bg-slate-200 h-[25vh] flex justify-center items-center'>
                <h1 className='text-center font-semibold text-2xl'>Applied Jobs</h1>
            </div>
            <div className='flex gap-10'>
                <button>remote</button>
                <button onClick={()=>clicker()}>onsite</button>
            </div>
            <div>
            {
                afra.map(e => (<StoredJobs key={e.id} e={e}></StoredJobs>))
            }
        </div>
        </div>
    );
};

export default AppJobs;