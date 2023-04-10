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
        <div className='flex w-11/12 mx-auto gap-10 text-justify'>
            <div className='w-4/6 bg-slate-50 p-10 grid gap-5'>
            <h1><b>job Description:</b> {existItem.jobDescription}</h1>
            <p><b>Job Responsibility:</b>{existItem.jobResponsibility} </p>
            <span><b>Educational Requirements:</b> <br /> {existItem.eductionalRequirments}</span>

            <p><b>Experience:</b> <br /> {existItem.experiences}</p>
            </div>
            <div className='bg-slate-100 p-5 '>
                <p className='text-center font-semibold text-2xl my-5'>job details</p>
                <hr />

                <div className='my-5'>
                    <div className='flex gap-3 my-5'>
                    <img src="https://cdn-icons-png.flaticon.com/512/484/484167.png" alt="" className='w-5'/>
                    <span>Salary: {existItem.salary}</span>
                    </div>
                    <div className='flex gap-3'>
                    <img src="https://cdn-icons-png.flaticon.com/512/3850/3850259.png" alt="" className='w-5'/>
                    <span>Job Title:{existItem.jobTitle}</span>
                    </div>
                </div>
                <h1 className='text-center text-2xl font-semibold my-5'>Contact Information</h1>
                <hr />
                <div>
                    <div className='flex gap-3 my-5'>
                    <img src="https://cdn-icons-png.flaticon.com/512/126/126509.png" alt="" className='w-5'/>
                    <span>Phone: {existItem.contact.phone}</span>
                    </div>
                    <div className='flex gap-3 mb-5'>
                    <img src="https://cdn-icons-png.flaticon.com/512/542/542638.png" alt="" className='w-5'/>
                    <span>Email: {existItem.contact.email}</span>
                    </div>
                    <div className='flex gap-3'>
                    <img src="https://cdn-icons-png.flaticon.com/512/6320/6320900.png" alt="" className='w-5'/>
                    <span>Address: {existItem.contact.address}</span>
                    </div>
                </div>
                <Link to="/jobs" onClick={()=> handlCart(identity.id)}>Apply Now</Link>
            </div>
        </div>
    );
};

export default ItemDetails;