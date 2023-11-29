import React from 'react'
import TitlePage from '../page1/TitlePage'
import SecurityTypes from '../page2/SecurityTypes'
import Guidence from '../page3/Guidence'
import FooterSec from '../footer/FooterSec'

const Home = () => {
  return (
    <>
        <TitlePage />
        <SecurityTypes />
        <Guidence />
        <FooterSec />
    </>
  )
}

export default Home