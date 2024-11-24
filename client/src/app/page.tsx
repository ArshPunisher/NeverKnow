"use client"

import Banner from '@/components/Home/Banner/page'
import Categories from '@/components/Home/Categories/page'
import Navbar from '@/components/Navbar/page'
import { useState, useEffect } from 'react'
 
export default function App() {
 
  return (
    <div className='h-[200vh]'>
      <Navbar/>
      <Banner/>
      <Categories/>
    </div>
  )
}