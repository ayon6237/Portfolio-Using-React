import React from 'react'
import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner'
import Others from '../Components/Others/Others'
import Footer from '../Components/Footer/Footer'
import SecondHeader from '../Components/Second_Header/Second_Header'
import Skill from '../Components/Skills/Skill'
import Linker from '../Components/Linker/Linker'

const Home = () => {
  return (
    <>
      <Header />
      <SecondHeader />
      <Banner />
      <Skill />
      <Others />
      <Linker />
      <Footer />
    </>
  )
}

export default Home
