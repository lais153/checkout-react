import React from "react";

export function PainelPreco({ totalGeral }) {

  return (
    <div style={{ padding: "20px", border: "2px dashed #ddd", borderRadius: "6px", margin: "20px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "18px" }}>
        <span>Subtotal do Pedido:</span>
        <strong>R$ {totalGeral.toFixed(2)}</strong>
      </div>
    </div>
  );
}
