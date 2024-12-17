import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Layout } from './Components/Layout/Layout';
import { About } from './Pages/About';
import { Cart } from './Pages/Cart';
import { Contact } from './Pages/Contact';
import { HowToBrew } from './Pages/HowToBrew';
import { Shop } from './Pages/Shop';
import { Home } from "./Pages/Home";

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path='home' element={<Home />} />
              <Route path='shop' element={<Shop />} />
              <Route path="howToBrew" element={<HowToBrew />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
