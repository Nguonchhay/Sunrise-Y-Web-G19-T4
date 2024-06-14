import React from 'react'
import SearchPopup from '../../components/SearchPopup'
import Header from '../../components/Header'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'
import FooterBottom from '../../components/FooterBottom'

export default function AppLayout({ children }) {
  return (
    <>
        <SearchPopup />
        <Header />
       
        {children}
       
        <Newsletter />
        <Footer />
        <FooterBottom />
    </>
  )
}
