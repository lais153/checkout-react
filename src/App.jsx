import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Carrinho } from "./pages/Carrinho";
import { Pagamento } from "./pages/Pagamento";
import { Sucesso } from "./pages/Sucesso";
import { Falha } from "./pages/Falha";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Carrinho />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/sucesso" element={<Sucesso />} />
        <Route path="/falha" element={<Falha />} />
      </Routes>
    </Router>
  );
}
 
