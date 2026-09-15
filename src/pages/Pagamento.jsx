import React from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useProcessarPagamento } from "../hooks/usePagamento";

const validacaoSchema = z.object({
  titular: z.string().min(1, "Preenchimento obrigatório do nome"),
  numeroCartao: z.string()
    .transform(t => t.replace(/[^0-9]/g, ""))
    .refine(t => t.length === 16, { message: "Número do cartão inválido (precisa ter 16 números)" }),
  validade: z.string()
    .min(5, "Insira a data como MM/AA")
    .refine(t => {
      const token = t.split("/");
      if (token.length !== 2) return false;
      const m = parseInt(token, 10);
      return m >= 1 && m <= 12;
    }, { message: "Mês digitado incorreto" }),
  cvv: z.string().transform(t => t.trim()).refine(t => t.length === 3, { message: "O código CVV precisa ter 3 digitos" })
});

export function Pagamento() {
  const { state } = useLocation();
  const { loading, dispararPagamento } = useProcessarPagamento();
  const totalAPagar = state?.valorTotal || 0;
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(validacaoSchema) });

  return (
    <main style={{ maxWidth: "480px", margin: "40px auto", padding: "20px", fontFamily: "Segoe UI, sans-serif" }}>
      <h2>💳 Detalhes do Pagamento</h2>
      <p style={{ background: "#eee", padding: "10px", borderRadius: "4px" }}>Total: <strong>R$ {totalAPagar.toFixed(2)}</strong></p>
      <form onSubmit={handleSubmit(dispararPagamento)} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div>
          <label style={{ display: "block", fontSize: "14px" }}>Nome Impresso no Cartão:</label>
          <input type="text" {...register("titular")} style={{ width: "100%", padding: "10px", marginTop: "4px" }} />
          {errors.titular && <p style={{ color: "purple", margin: "4px 0 0", fontSize: "13px" }}>{errors.titular.message}</p>}
        </div>
        <div>
          <label style={{ display: "block", fontSize: "14px" }}>Numeração do Cartão:</label>
          <input type="text" placeholder="0000 0000 0000 0000" {...register("numeroCartao")} style={{ width: "100%", padding: "10px", marginTop: "4px" }} />
          {errors.numeroCartao && <p style={{ color: "purple", margin: "4px 0 0", fontSize: "13px" }}>{errors.numeroCartao.message}</p>}
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: "block", fontSize: "14px" }}>Validade:</label>
            <input type="text" placeholder="MM/AA" {...register("validade")} style={{ width: "100%", padding: "10px", marginTop: "4px" }} />
            {errors.validade && <p style={{ color: "purple", margin: "4px 0 0", fontSize: "13px" }}>{errors.validade.message}</p>}
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: "block", fontSize: "14px" }}>CVV:</label>
            <input type="text" placeholder="000" {...register("cvv")} style={{ width: "100%", padding: "10px", marginTop: "4px" }} />
            {errors.cvv && <p style={{ color: "purple", margin: "4px 0 0", fontSize: "13px" }}>{errors.cvv.message}</p>}
          </div>
        </div>
        <button type="submit" disabled={loading} style={{ width: "100%", padding: "14px", background: loading ? "#ccc" : "#4a148c", color: "#fff", border: "none", borderRadius: "6px", fontSize: "16px", cursor: loading ? "not-allowed" : "pointer", marginTop: "10px" }}>
          {loading ? "Processando compra..." : "Efetuar Pagamento"}
        </button>
      </form>
    </main>
  );
}
 
