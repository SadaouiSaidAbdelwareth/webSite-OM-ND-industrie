import { NavBar } from './components/navBar'
import { Home } from './sections/Home'
import { Presentations } from './sections/Presentations'
import { Services } from './sections/Services'
import { Products } from './sections/Products'
import { ContactUs } from './sections/ContactUs'
import {Footer} from './sections/Footer'

function App() {

  return (
  <div className=' w-full relative flex flex-col space-y-8  '>  
    <NavBar/>
    <Home />
    <Presentations/>
    <Services/>
    <Products/>   
    <ContactUs/> 
    <Footer/>
  </div>
      
  )
}

export default App
