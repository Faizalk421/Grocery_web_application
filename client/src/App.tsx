import {Toaster} from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import AppLayout from './pages/AppLayout'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Product from './pages/product'
import SearchResults from './pages/SearchResults'
import FlashDeals from './pages/FlashDeals'
import Checkout from './pages/Checkout'
import MyOrders from './pages/MyOrders'
import OrderTracking from './pages/OrderTracking'
import Address from './pages/Address'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#1B3022",
            color: "#fff",
            borderRadius: "12px",
            fontSize: "14px",
          },
        }}
      />
      <Routes>
        {/* Auth pages - no navbar/footer */}
        <Route path="/login" element={<Login />} />
        {/* Main pages - with navbar/footer */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="deals" element={<FlashDeals/>}/>
          <Route element={<ProtectedRoute/>}>
          <Route path="checkout" element={<Checkout />} />
          <Route path="orders" element={<MyOrders />} />
          <Route path="orders/:id" element={<OrderTracking />} />
          <Route path="addreses" element={<Address />} />

          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App
