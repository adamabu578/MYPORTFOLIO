import React from 'react'
import Hero from '@/components/Hero/Hero'
import PortfolioCards from '@/components/Project/Project'
import ContactPage from '@/components/Contact/Contact'





const page = () => {
  return (
    <div>
        <Hero />
        <PortfolioCards  />
        <ContactPage/>
    </div>
  )
}

export default page