// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/App.css';
import List from '@/pages/cart/List';
import Detail from '@/pages/cart/Detail';
import Cart from '@/pages/cart/Cart';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/detail" element={<Detail/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
