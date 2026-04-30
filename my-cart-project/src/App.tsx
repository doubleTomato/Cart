// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import List from './pages/cart/List';
import Detail from './pages/cart/List';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/detail" element={<Detail/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
