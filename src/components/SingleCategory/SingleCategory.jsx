import React from 'react';

const SingleCategory = ({e}) => {
    const{picture, name, jobs} = e
    return (
        <div className='bg-slate-100 rounded-lg w-4/6 mx-auto'>
            <div className='p-5 text-center'>
            <img src={picture} alt="" className='w-1/6 mx-auto pt-10'/>
            <p className='pt-5 font-semibold'>{name}</p>
            <span>{jobs}</span>
        </div>
        </div>
    );
};

export default SingleCategory;