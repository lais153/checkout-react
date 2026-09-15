import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checarFraudeCartao } from "../utils/pagamento";

export function useProcessarPagamento() {
  const [loading, setLoading] = useState(false);
  const redirecionar = useNavigate();

  const dispararPagamento = async (formulario) => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 2000));
    
    const suspeito = checarFraudeCartao(formulario.numeroCartao);
    setLoading(false);

    if (suspeito) {
      redirecionar("/falha");
    } else {
      redirecionar("/sucesso");
    }
  };

  return { loading, dispararPagamento };
}
 
