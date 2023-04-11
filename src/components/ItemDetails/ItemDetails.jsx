import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../Utils/FakeDb';



const ItemDetails = () => {
    const items = useLoaderData()
    const identity = useParams();
    
    const existItem = items.find(e => e.id === identity.id);
    
    const handlCart = id =>{
         addToDb(id)
        

    }
    
    
    return (
        <div>
            <div className='bg-slate-200 h-[25vh] flex justify-center items-center'>
                <h1 className='text-center font-semibold text-2xl'>Job Details</h1>
            </div>
        <div className='md:flex w-11/12 mx-auto gap-10 text-justify'>
            <div className='md:w-4/6 bg-slate-50 p-10 grid gap-5'>
            <h1><b>job Description:</b> {existItem.jobDescription}</h1>
            <p><b>Job Responsibility:</b>{existItem.jobResponsibility} </p>
            <span><b>Educational Requirements:</b> <br /> {existItem.eductionalRequirments}</span>

            <p><b>Experience:</b> <br /> {existItem.experiences}</p>
            </div>
            <div className='bg-slate-100 p-5 grid'>
                <p className='text-center font-semibold text-2xl my-5'>job details</p>
                <hr />

                <div className='my-5'>
                    <div className='flex gap-3 my-5'>
                    <img src="https://cdn-icons-png.flaticon.com/512/484/484167.png" alt="" className='w-5'/>
                    <span><span className='font-semibold'>Salary:</span> {existItem.salary}</span>
                    </div>
                    <div className='flex gap-3'>
                    <img src="https://cdn-icons-png.flaticon.com/512/3850/3850259.png" alt="" className='w-5'/>
                    <span><span className='font-semibold'>Job Title:</span>{existItem.jobTitle}</span>
                    </div>
                </div>
                <h1 className='text-center text-2xl font-semibold my-5'>Contact Information</h1>
                <hr />
                <div>
                    <div className='flex gap-3 my-5'>
                    <img src="https://cdn-icons-png.flaticon.com/512/126/126509.png" alt="" className='w-5'/>
                    <span><span className='font-semibold'>Phone: </span>{existItem.contact.phone}</span>
                    </div>
                    <div className='flex gap-3 mb-5'>
                    <img src="https://cdn-icons-png.flaticon.com/512/542/542638.png" alt="" className='w-5'/>
                    <span><span className='font-semibold'>Email:</span> {existItem.contact.email}</span>
                    </div>
                    <div className='flex gap-3'>
                    <img src="https://cdn-icons-png.flaticon.com/512/6320/6320900.png" alt="" className='w-5'/>
                    <span><span className='font-semibold'>Address:</span> {existItem.contact.address}</span>
                    </div>
                </div>
                <div className='text-center mt-5'>
                <Link onClick={()=> handlCart(identity.id)} className="butoon w-24 py-3">Apply Now</Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ItemDetails;