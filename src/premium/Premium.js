import React from 'react'
import Nav from '../nav/Nav'
import FooterSec from '../footer/FooterSec'
import { FcApproval } from "react-icons/fc";

const Premium = () => {
  return (
    <>
      <div>
        <div>
          <Nav />
        </div>
        <div>
            <div className='flex justify-center items-center flex-row m-10'>
              <div><img src="https://tse1.mm.bing.net/th?id=OIP.jwlIVEoFh4cJhWFuYOLBpQHaHa&pid=Api&P=0&h=180" alt="" /></div>
              <div className='text-3xl'>Everything Looks Secure when its Premium</div>
            </div>
            <div className='flex justify-center items-center flex-row m-10 '>
              <div className='border-2 bg-blue-400 bg-opacity-30 p-4 space-x-10  mx-[20px]'>
                <p className='font-semibold'>Anitivirus</p>
                <p>Shop Stylight's Selection of <br />  Beautybrands and the latest </p>
               <div className='flex justify-end items-end mt-4'> <button ><FcApproval  size={40}/></button> </div>
              </div>
              <div className='border-2  bg-blue-400 bg-opacity-30 p-4 space-x-10 mx-[20px]'>
                <p  className='font-semibold'>Fire Wall</p>
                <p>Shop Stylight's Selection of <br />  Beautybrands and the latest </p>
                <div className='flex justify-end items-end mt-4'> <button ><FcApproval  size={40}/></button> </div>
              </div>
              <div className='border-2  bg-blue-400 bg-opacity-30 p-4 space-x-10 mx-[20px]'>
                <p  className='font-semibold'>Secure app</p>
                <p>Shop Stylight's Selection of <br />  Beautybrands and the latest </p>
                <div className='flex justify-end items-end mt-4'> <button ><FcApproval  size={40}/></button> </div>
              </div>
              <div className='border-2  bg-blue-400 bg-opacity-30 p-4 space-x-10 mx-[20px]'>
                <p  className='font-semibold'>Booster</p>
                <p>Shop Stylight's Selection of <br />  Beautybrands and the latest </p>
                <div className='flex justify-end items-end mt-4'> <button ><FcApproval  size={40}/></button> </div>
              </div>
            </div>
        </div>
        <div className='mt-[120px]'>
          <FooterSec />
        </div>
      </div>
    </>
  )
}

export default Premium