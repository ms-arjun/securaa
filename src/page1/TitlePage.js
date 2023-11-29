import React from 'react'
import './title.css'
import Nav from '../nav/Nav'
import { Link } from 'react-router-dom'



const TitlePage = () => {

  return (
    <>
        <div>
            <Nav />
        </div>

      <div className=' w-full h-[620px] head'>
        <div className='flex flex-col justify-left items-center sm:ml-[-400px]'>
          <div>  <p className='text-white sm:text-6xl text-3xl  mt-[150px]'> SECURITY IS NOT OPTIONAL </p> </div>
          <div> <p className='text-white sm:text-6xl text-4xl mt-[50px]'> IT's NECESSITY </p> </div>
          <div> <Link to={'/discover'}> <button className='text-white w-[200px] rounded-2xl bg-blue-500 mt-[50px] h-[50px]'>Discover</button> </Link> </div>
       </div>
      </div>
    </>
  )
}

export default TitlePage