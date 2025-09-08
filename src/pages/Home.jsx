import React from 'react'
import Hero from '../components/Hero'
import SmallBanners from '../components/SmallBanners'
import Category from '../components/Category'
import NewArrival from '../components/NewArrival'
import Popular from '../components/Popular'
import Discounts from '../components/Discounts'
import Summersale from '../components/Summersale'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <SmallBanners/>
        <Category/>
        <NewArrival/>
        <Popular/>
        <Discounts/>
        <Summersale/>
        
    </div>
  )
}

export default Home