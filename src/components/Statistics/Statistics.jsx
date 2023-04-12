import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import vector from '../../../public/vector.png';
import vectorOne from '../../../public/vector-1.png';

const Statistics = () => {

    const data01 = useLoaderData();
    return (
        <div className='bg-white'>
          <div className='bg-slate-200 h-[23vh] flex justify-center items-center'>
            <img src={vectorOne} alt="" className='absolute right-0 md:w-60 w-32'/>
                <h1 className='text-center font-semibold text-2xl'>Statistics</h1>
                <img src={vector} alt="" className='absolute top-32 md:top-auto left-0 md:w-60 w-32'/>
            </div>
          <div className='mx-auto w-11/12 mt-3 mb-12'>
          <AreaChart width={1200} height={500} data={data01}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis dataKey="value"/>
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="value" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
          </div>
        </div>
    );
};

export default Statistics;