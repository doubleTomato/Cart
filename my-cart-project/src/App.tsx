import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import ProductListPage from '@/pages/cart/ProductListPage';
import ProductDetailPage from '@/pages/cart/ProductDetailPage';
// import CartPage from '@/pages/cart/CartPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/detail/:id" element={<ProductDetailPage/>} />
            {/* <Route path="/cart" element={<CartPage/>} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
