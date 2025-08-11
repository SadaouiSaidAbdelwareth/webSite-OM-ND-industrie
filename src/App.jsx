import { NavBar } from './components/navBar.jsx'
import { Home } from './sections/Home.jsx'
import { Presentation } from './sections/Presentation.jsx'
import { Services } from './sections/Services.jsx'
import { Products } from './sections/Products.jsx'
import { ContactUs } from './sections/Contact.jsx'
import {Footer} from './sections/Footer.jsx'
import {Documents} from './sections/Document.jsx'
import { Partners } from './sections/Partners.jsx'

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
