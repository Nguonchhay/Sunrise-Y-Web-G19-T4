import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./views/pages/HomePage";
import ProductsPage from "./views/pages/ProductsPage";
import ContactUsPage from "./views/pages/ContactUsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="contact-us" element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
