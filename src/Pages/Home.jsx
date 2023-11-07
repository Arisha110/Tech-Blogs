import React from 'react'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div className='w-full flex flex-col justify-center'>
      <Header/>
      <div className='w-[90%] flex flex-col justify-center mx-auto xl:w-[690px] mt-[64px] '>
        <Blogs/>
        
      </div>
      <Pagination/>
    </div>
  )
}

export default Home
