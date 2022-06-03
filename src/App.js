import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import BrandDetails from "./components/brand/BrandDetails";
import BrandPage from "./components/pages/BrandPage";
import Header from "./components/ui/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/home" element={<Navigate replace to="/" />} />
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/brand" element={<BrandPage />} />
          <Route path="/brand/:brandId" element={<BrandDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
