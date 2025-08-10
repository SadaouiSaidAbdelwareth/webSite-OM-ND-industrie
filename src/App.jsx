import { NavBar } from './components/navBar'
import { Home } from './sections/Home'
import { Presentation } from './sections/presentation'
import { Services } from './sections/Services'
import { Products } from './sections/Products'
import { ContactUs } from './sections/contactUs'
import {Footer} from './sections/Footer'
import Documents from './sections/documents'
import { Partners } from './sections/Partners'

function App() {

  return (
  <div className=' w-full relative flex flex-col space-y-8  '>  
    <NavBar/>
    <Home />
    <Presentation/>
    <Services/>
    <Products/>   
    <ContactUs/> 
    <Documents/>
    <Partners/>
    <Footer/>
  </div>
      
  )
}

export default App
