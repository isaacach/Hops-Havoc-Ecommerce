import './App.css'
import { Contact } from './Pages/Contact';
import { HowToBrew } from './Pages/HowToBrew';
import { Shop } from './Pages/Shop';
import { About } from './Pages/About';
import { Layout } from './Components/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path='shop' element={<Shop />} />
              <Route path="howToBrew" element={<HowToBrew />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
