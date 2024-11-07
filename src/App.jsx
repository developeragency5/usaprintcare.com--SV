import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';
import Office from './pages/Office';
import PrinterService from './pages/PrinterService';
import ManagedPrint from './pages/ManagedPrint';
import Blogs from './pages/Blogs';

import Privacy from './Components/Privacy';
import Terms from './Components/Terms';
import RR from './Components/RR';
import Disclaimer from './Components/Disclaimer';
import Experts from './pages/Experts';
import Footer1 from './pages/Footer1'

// import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Blogs/>} />
 

        <Route path="/office-equipment" element={<Office/>} />
        <Route path="/printer-service" element={<PrinterService/>} />   
        <Route path="/managed-print" element={<ManagedPrint/>} />
        <Route path="/terms" element={<Terms/>} />

        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/return&refund" element={<RR/>} />
        <Route path="/disclaimer" element={<Disclaimer/>} />
        <Route path="/experts" element={<Experts/>} />
        <Route path="/experts" element={<Footer1/>} />

        {/* <Route path="/privayPolicies" element={<PrivacyPolicy/>} /> */}
      </Routes>
    </>
  )
}

export default App
