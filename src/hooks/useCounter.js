import { useState } from 'react';

// Hooks personalizados começam com 'use' e podem chamar outros hooks.
export function useCounter(valorInicial = 0) {
  const [contador, setContador] = useState(valorInicial);

  // Atualização funcional: usa sempre o valor anterior mais recente.
  const aumentar = () => setContador((valor) => valor + 1);
  const diminuir = () => setContador((valor) => valor - 1);
  const zerar = () => setContador(valorInicial);

  // Compartilhamos a lógica, não o mesmo estado entre os componentes.
  return { contador, aumentar, diminuir, zerar };
}