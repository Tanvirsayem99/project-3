import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredData } from '../../Utils/FakeDb';
import StoredJobs from '../StoredJobs/StoredJobs';

const AppJobs = () => {
    const storedJobs = useLoaderData();
    let cart = []
    const sayem = getStoredData()
    for(const id in sayem){
        const storedItems = storedJobs.find(e => e.id === id)
        if(storedItems){
            cart.push(storedItems)
            console.log('hello')
        }
        else{
            console.log('hi')
        }
        console.log(storedItems)
        
    }
    

    
    return (
        <div>
            <div className='bg-slate-200 h-[25vh] flex justify-center items-center'>
                <h1 className='text-center font-semibold text-2xl'>Applied Jobs</h1>
            </div>
            <div>
            {
                cart.map(e => (<StoredJobs key={e.id} e={e}></StoredJobs>))
            }
        </div>
        </div>
    );
};

export default AppJobs;