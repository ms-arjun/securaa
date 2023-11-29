import React, { useState } from 'react'
import Nav from '../nav/Nav'
import FooterSec from '../footer/FooterSec'
import { Link } from 'react-router-dom'

const Smarttv = () => {

    const [tvName, setTvName] = useState("")
    const [tvNameDis, setTvNameDis] = useState(false)
    

    const handleClick = ()=>{
    
        setTvNameDis(`please wait, we are connecting your device ( ${tvName} )` )
        
    }

  return (
    <>
        <div>
            <Nav />
        </div>
        <div>
            <div className='w-[100%] h-[70vh] flex justify-evenly items-center flex-col'>
                <div>
                    <p className='sm:text-6xl text-3xl'>Enter Your Device Name</p>
                </div>
                <form action="">
                    <input type="text"  
                    className='border-2 border-cyan-600 sm:w-[400px] w-[250px] h-[50px] text-center'
                    value={tvName}
                    onChange={e=>setTvName(e.target.value)}
                    name='inputval'
                     />
                </form>
                <div>
                    <Link to={'/tvsectypes'}>
                    <button 
                    className='text-white w-[200px] rounded-2xl bg-blue-500 mt-[50px] h-[50px]'
                    onClick={handleClick}>Confirm</button>
                    </Link>
                </div>
                <span className='sm:text-2xl text-[16px]'>{tvNameDis}</span>
        
            </div>
        </div>
        <div>
            <FooterSec />
        </div>
    </>
  )
}

export default Smarttv