import React from 'react';
import { useRouteError } from 'react-router-dom';



const ErrorPage = () => {
    const Error = useRouteError();
    return (
        <div className='w-3/6 mx-auto'>
            <img src="https://cdn-icons-png.flaticon.com/512/595/595067.png" alt="" className="w-4/6 mx-auto"/>
             <h1 className='text-red-500 font-semibold text-3xl text-center'>Oops!</h1>
      <p className='text-center my-5'>Sorry, you enter a invalid path, please enter valid path</p>
      <p className='text-center'>
        <i>{Error.statusText || Error.message}</i>
      </p>
        </div>
    );
};

export default ErrorPage;