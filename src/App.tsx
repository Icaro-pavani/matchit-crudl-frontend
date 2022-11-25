import React from "react";
import GlobalStyle from "./themes/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SellerList from "./pages/SellerList";
import SellerFormPage from "./pages/SellerFormPage";
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SellerList />} />
          <Route path="/edit/:code" element={<SellerFormPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
