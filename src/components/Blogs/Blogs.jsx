import React from 'react';
import vector from '../../../public/vector.png';
import vectorOne from '../../../public/vector-1.png';
const Blogs = () => {
    return (
       <div>
         <div className='bg-slate-200 h-[25vh] flex justify-center items-center'>
            <img src={vectorOne} alt="" className='absolute right-0 md:w-60 w-32'/>
                <h1 className='text-center font-semibold text-2xl'>Blog</h1>
                <img src={vector} alt="" className='absolute left-0 md:w-60 w-32'/>
            </div>
        <div className='w-11/12 mx-auto grid gap-5 rounded-md'>
            <div className='bg-red-50 pl-5 py-2'>
                <h1 className='text-2xl font-semibold text-fuchsia-700 my-3 font-serif'>When Context API used?</h1>
                <p className="font-mono">Context Context API used as a alternative to "prop drilling" or moving props from grandparent to child to parent.</p>
            </div>
            <div className='bg-red-50 pl-5 py-2'>
                <h1 className='text-2xl font-semibold text-fuchsia-700 my-3 font-serif'>What Is Custom Hook In React?</h1>
                <p className="font-mono">Custom hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React web application.</p>
            </div>
            <div className='bg-red-50 pl-5 py-2'>
                <h1 className='text-2xl font-semibold text-fuchsia-700 my-3 font-serif'>What Is UseRef In React?</h1>
                <p className="font-mono">The useRef is a built-in React hook that allows to directly create a reference to the DOM element in the functional component.</p>
            </div>
            <div className='bg-red-50 pl-5 py-2'>
                <h1 className='text-2xl font-semibold text-fuchsia-700 my-3 font-serif'>What Is UseMemo In React?</h1>
                <p className="font-mono">The useMemo is a built-in React hook that allows you to memoize expensive functions so that you can avoid calling them on every render.</p>
            </div>
        </div>
       </div>
    );
};

export default Blogs;