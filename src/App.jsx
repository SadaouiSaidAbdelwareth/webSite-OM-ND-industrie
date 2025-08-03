import { useState } from 'react'
import { NavBar } from './components/navBar'
import { Home } from './sections/Home'
import { Presentations } from './sections/presentations'
import { Services } from './sections/services'
import { Products } from './sections/products'
import { ContactUs } from './sections/contactUs'

function App() {

  return (
  <div className=' w-full relative flex flex-col space-y-8  '>  
    <NavBar/>
    <Home />
    <Presentations/>
    <Services/>
    <Products/>
    <ContactUs/> 
  </div>
      
  )
}

export default App
