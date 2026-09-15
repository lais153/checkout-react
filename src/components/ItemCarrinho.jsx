import React from "react";

export const CardItem = ({ item }) => {
  const totalItem = item.precoUnitario * item.quantidade;
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "12px", background: "#fcfcfc", marginBottom: "8px", borderRadius: "6px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
      <div>
        <h4 style={{ margin: 0, color: "#333" }}>{item.nome}</h4>
        <span style={{ fontSize: "13px", color: "#666" }}>Qtd: {item.quantidade} x R$ {item.precoUnitario.toFixed(2)}</span>
      </div>
      <div style={{ alignSelf: "center" }}>
        <strong style={{ color: "#111" }}>R$ {totalItem.toFixed(2)}</strong>
      </div>
    </div>
  );
};
 
