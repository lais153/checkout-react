export function checarFraudeCartao(numCartao) {
  const numerosApenas = String(numCartao).replace(/[^0-9]/g, "");
  if (numerosApenas.length !== 16) return false;
  
  const digitosUnicos = new Set(numerosApenas.split(""));
  return digitosUnicos.size === 1;
}
 
