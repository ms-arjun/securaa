import React from 'react'
import { FaLinkedin,FaInstagramSquare,FaFacebookSquare, FaYoutube} from "react-icons/fa";


const footer = () => {
  return (
    <>
        <div className='w-full h-full flex sm:flex-row flex-col sm:items-center sm:ml-0 ml-10 justify-evenly'>
            <div>
                <p className='font-bold'>CONTACTS</p>
                <ul>
                    <li>pre-sale services</li>
                    <li>sos line</li>
                </ul>
            </div>
            <div>
                <p className='font-bold'>SUPPORT</p>
                <ul>
                    <li>help desk</li>
                    <li>documentation</li>
                </ul>
            </div>
            <div>
                <p className='font-bold'>FOLLOW US</p>
                <ul className='flex sm:py-4 py-2'>
                     <li><FaYoutube size={20} /></li>
                    <li> <FaLinkedin size={20} /> </li>
                    <li><FaInstagramSquare size={20} /></li>
                    <li><FaFacebookSquare size={20} /></li>
                </ul>
            </div>
            <div>
                <p className='font-bold'>SECURAA</p>
                <ul>
                    <li>&copy; copyright 2023 by securaa</li>
                    <li>help@securaa.com</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default footer