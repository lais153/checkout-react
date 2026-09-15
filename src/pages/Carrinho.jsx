import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LISTA_PRODUTOS } from "../data/produtos";
import { CardItem } from "../components/ItemCarrinho";
import { PainelPreco } from "../components/ResumoCompra";

export function Carrinho() {
  const [itens] = useState(LISTA_PRODUTOS);
  const navegar = useNavigate();
  const precoFinal = itens.reduce((soma, i) => soma + (i.precoUnitario * i.quantidade), 0);

  return (
    <main style={{ maxWidth: "550px", margin: "40px auto", padding: "15px", fontFamily: "Segoe UI, sans-serif" }}>
      <h2 style={{ borderBottom: "2px solid #333", paddingBottom: "10px" }}>🛍️ Sacola de Compras</h2>
      <div style={{ marginTop: "20px" }}>
        {itens.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
      <PainelPreco totalGeral={precoFinal} />
      <button 
        onClick={() => navegar("/pagamento", { state: { valorTotal: precoFinal } })}
        style={{ width: "100%", padding: "14px", background: "#4a148c", color: "#fff", border: "none", borderRadius: "6px", fontSize: "16px", fontWeight: "bold", cursor: "pointer" }}
      >
        Avançar para o Pagamento
      </button>
    </main>
  );
}
 
