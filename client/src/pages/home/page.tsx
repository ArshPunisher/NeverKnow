import React from 'react'
import Navbar from '../../components/Navbar/page'
import Banner from '../../components/Home/Banner/page'
import Categories from '../../components/Home/Categories/page'

const Home = () => {
  return (
    <div className="h-[200vh]">
      <Navbar />
      <Banner />
      <Categories />
    </div>
  )
}

export default Home
