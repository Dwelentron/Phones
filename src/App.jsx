import { useState } from 'react'
import './App.css'
// import Nav from './assets/comp/Nav'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './assets/comp/Nav'
import Home from './assets/comp/Home'
import Products from './assets/comp/Products'
import Cart from './assets/comp/Cart'
import About from './assets/comp/About'
import {CartProvider} from 'react-use-cart'
function App() {
  const [count, setCount] = useState(0)

  return (
    <CartProvider>
      <BrowserRouter>
        <header>
        <Header />
        </header>

        <main>

        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<About />} />
        </Routes>

        </main>
       
        
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
