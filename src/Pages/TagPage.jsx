import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';


const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header/>
        <div className='w-full flex flex-col gap-y-1 my-9 mb-[90px] mt-20 items-center justify-center'>
            <div className='flex flex-col w-[90%] items-start justify-center xl:w-[50%]'>
                <div className='flex gap-6 items-center justify-center'>
              <button className='border-2 border-gray-300 py-1 px-4 rounded-md w-30 xl:w-45 text-purple-900'
            onClick={() => navigation(-1)}
            >
                Back
            </button>
            <h2 className='font-bold text-xl'>
                Blogs Tagged <span>#{tag}</span>
            </h2>
        </div>
        <Blogs/>    
            
            
          </div>
        </div>
        
        <Pagination/>
      
    </div>
  )
}

export default TagPage
