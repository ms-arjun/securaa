import React from 'react'
import Nav from '../nav/Nav'
import Guidence from '../page3/Guidence'
import FooterSec from '../footer/FooterSec'

const Manual = () => {
  return (
    <>
        <div>
            <Nav />
        </div>
        <div className='sm:mt-0 mt-[-500px]'>
            <Guidence />
        </div>
        <div className='sm:mt-0 mt-[-200px]'>
            <FooterSec />
        </div>
    </>
  )
}

export default Manual