import React from 'react'
import { Outlet } from 'react-router-dom'
import MainTopNavbar from '../components/MainTopNavbar'
import Footer from '../components/footer'

export default function RootLayout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header>
      <MainTopNavbar />
      </header>
    
      <main className='grow'>
      <Outlet />
      </main>

      <Footer />
    </div>
  )
}
