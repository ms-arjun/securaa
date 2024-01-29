import React from 'react'
import scanvid from '../assets/scanvid.mp4'

const Scan = () => {
  return (
    <div className='w-full'>
      <video src={scanvid} autoPlay="true" controls="controls" className='w-full' />
    </div>
  )
}

export default Scan