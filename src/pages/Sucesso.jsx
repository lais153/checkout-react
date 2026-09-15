import React from "react";
import { Link } from "react-router-dom";

export function Sucesso() {
  return (
    <main style={{ maxWidth: "500px", margin: "80px auto", textAlign: "center", fontFamily: "Segoe UI, sans-serif" }}>
      <h1 style={{ color: "#1b5e20", fontSize: "2.2rem" }}>🎉 Transação Concluída!</h1>
      <p style={{ color: "#555", margin: "15px 0" }}>Obrigado! Seu pagamento foi aceito e o pedido está em preparação.</p>
      <Link to="/" style={{ display: "inline-block", padding: "12px 24px", background: "#1b5e20", color: "#fff", textDecoration: "none", borderRadius: "6px" }}>Voltar ao Início</Link>
    </main>
  );
}
