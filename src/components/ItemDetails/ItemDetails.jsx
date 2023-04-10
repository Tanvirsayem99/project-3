import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';



const ItemDetails = () => {
    const items = useLoaderData()
    const identity = useParams();
    
    const existItem = items.find(e => e.id === identity.id);
    console.log(existItem)
    
    
    
    return (
        <div className='flex w-11/12 mx-auto'>
            <div className='w-4/6'>
            <h1>job Description: {existItem.jobDescription}</h1>
            <p>Job Responsibility:{existItem.jobResponsibility} </p>
            <span>Educational Requirements: <br /> {existItem.eductionalRequirments}</span>

            <p>Experience: <br /> {existItem.experiences}</p>
            </div>
            <div>
                <p>job details</p>
                <hr />

                <div>
                    <div className='flex gap-3'>
                    <img src="https://cdn-icons-png.flaticon.com/512/484/484167.png" alt="" className='w-5'/>
                    <span>Salary: {existItem.salary}</span>
                    </div>
                    <div className='flex gap-3'>
                    <img src="https://cdn-icons-png.flaticon.com/512/3850/3850259.png" alt="" className='w-5'/>
                    <span>Job Title:{existItem.jobTitle}</span>
                    </div>
                </div>
                <h1>Contact Information</h1>
                <div>
                    <div className='flex gap-3'>
                    <img src="https://cdn-icons-png.flaticon.com/512/126/126509.png" alt="" className='w-5'/>
                    <span>Phone: {existItem.contact.phone}</span>
                    </div>
                    <div className='flex gap-3'>
                    <img src="https://cdn-icons-png.flaticon.com/512/542/542638.png" alt="" className='w-5'/>
                    <span>Email: {existItem.contact.email}</span>
                    </div>
                    <div className='flex gap-3'>
                    <img src="https://cdn-icons-png.flaticon.com/512/6320/6320900.png" alt="" className='w-5'/>
                    <span>Address: {existItem.contact.address}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;