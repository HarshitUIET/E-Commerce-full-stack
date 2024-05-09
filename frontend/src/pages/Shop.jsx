import React from 'react'
import { Hero } from '../components/Hero'
import { Popular } from '../components/Popular'
import { Offers } from '../components/Offers'
import { NewCollection } from '../components/NewCollection'
import { Newsletter } from '../components/Newsletter'
import { Footer } from '../components/Footer'


export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}
