import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import BrandDetails from "./components/brand/BrandDetails";
import BrandForm from "./components/brand/BrandForm";
import Header from "./components/ui/Header";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import SearchPage from "./pages/SearchPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/home" element={<Navigate replace to="/" />} />
          <Route path="/" element={<HomePage/>} />
          <Route path="/brand" element={<BrandForm />} />
          <Route path="/brand/:brandId" element={<BrandDetails />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;