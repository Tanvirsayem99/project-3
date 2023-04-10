import React from 'react';

const SingleCategory = ({e}) => {
    const{picture, name, jobs} = e
    return (
        <div className='bg-slate-100 rounded-lg p-5'>
            <img src={picture} alt="" className='w-1/6 pt-10'/>
            <p className='pt-5 font-semibold'>{name}</p>
            <span>{jobs}</span>
        </div>
    );
};

export default SingleCategory;