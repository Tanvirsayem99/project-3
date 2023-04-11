import React from 'react';
import { Area, AreaChart, CartesianGrid, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {

    const data01 = [
        {
          "name": "Assignment-1",
          "value": 60
        },
        {
          "name": "Assignment-2",
          "value": 60
        },
        {
          "name": "Assignment-3",
          "value": 60
        },
        {
          "name": "Assignment-4",
          "value": 53
        },
        {
          "name": "Assignment-5",
          "value": 60
        },
        {
          "name": "Assignment-6",
          "value": 60
        },
        {
          "name": "Assignment-7",
          "value": 60
        }
      ];
    return (
        <div>
          <div className='bg-slate-200 h-[25vh] flex justify-center items-center'>
                <h1 className='text-center font-semibold text-2xl'>Job Details</h1>
            </div>
          <div className='mx-auto w-11/12'>
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