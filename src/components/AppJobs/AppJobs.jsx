import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredData } from '../../Utils/FakeDb';
import StoredJobs from '../StoredJobs/StoredJobs';

const AppJobs = () => {
    let sumaya = []
    const storedJobs = useLoaderData();
    const [seam, setSeam] = useState()
    const storedItem = getStoredData();
    for(const item in storedItem){
        const sayem = storedJobs.filter(e => e.id === item)
        sumaya.push(sayem)
    }
    console.log(sumaya)
    return (
        <div>
            {
                sumaya.map(e => (<StoredJobs key={e.id} e={e}></StoredJobs>))
            }
        </div>
    );
};

export default AppJobs;