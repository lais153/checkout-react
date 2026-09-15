import React from "react";
import { Link } from "react-router-dom";

export function Falha() {
  return (
    <main style={{ maxWidth: "500px", margin: "80px auto", textAlign: "center", fontFamily: "Segoe UI, sans-serif" }}>
      <h1 style={{ color: "#b71c1c", fontSize: "2.2rem" }}>tentativa de golpe</h1>
      <p style={{ color: "#555", margin: "15px 0" }}>A transação foi bloqueada pelos nossos sistemas de auditoria interna.</p>
      <Link to="/pagamento" style={{ display: "inline-block", padding: "12px 24px", background: "#b71c1c", color: "#fff", textDecoration: "none", borderRadius: "6px" }}>Tentar com outro cartão</Link>
    </main>
  );
}
