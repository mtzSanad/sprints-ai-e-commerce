import React, { useContext } from "react";
import { Route, Routes, Navigate  } from "react-router-dom";
import "./App.css";
import BrandDetails from "./components/brand/BrandDetails";
import BrandForm from "./components/brand/BrandForm";
import ProductPage from "./pages/ProductPage";
import SearchPage from "./pages/SearchPage";
import CartPage from "./pages/CartPage";
import Layout from "./components/Layout/Layout";
import AuthContext from "./store/auth-context";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/brand" element={<BrandForm />} />
          <Route path="/brand/:brandId" element={<BrandDetails />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cart" element={<CartPage />} />


          {!authCtx.isLoggedIn && <Route path="/auth" element={<AuthPage />} />}


          {!authCtx.isLoggedIn && <Route path="/auth" element={<AuthPage />} />}

          {authCtx.isLoggedIn && (
            <Route path="/profile" element={<ProfilePage />} />
          )}
          {!authCtx.isLoggedIn && (
            <Route path="/profile" element={<Navigate replace to="/auth" />} />
          )}

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        </Layout>
    </>
  );
}

export default App;






