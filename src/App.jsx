import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Service from './pages/Service';
import About from './pages/About';
import Security from './pages/Security';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Office from './pages/Office';
import PrinterService from './pages/PrinterService';
import ManagedPrint from './pages/ManagedPrint';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/security" element={<Security />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />

        <Route path="/office-equipment" element={<Office/>} />
        <Route path="/printer-service" element={<PrinterService/>} />
        <Route path="/managed-print" element={<ManagedPrint/>} />
      </Routes>
    </>
  )
}

export default App
