import React from 'react';
import main from '../../../../assets/main.png'
const Header = () => {
    return (
        <div className='bg-slate-100'>
            <div className='flex w-11/12 md:w-5/6 mx-auto items-center md:flex-row flex-col'>
                <div className='md:text-left text-center '>
                    <h1 className='text-5xl font-semibold w-3/6 mb-5'>One Step Closer To Your <span className='text-purple-700'>Dream job</span> </h1>
                    <p className='w-4/6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn mt-5'>Get started</button>
                </div>
                <div>
                    <img src={main} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;