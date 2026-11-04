import { useEffect, useState } from 'react';

// O hook combina estado do React com persistência no navegador.
export function useLocalStorage(chave, valorInicial) {
  const [valor, setValor] = useState(() => {
    // A função inicializadora só é necessária na criação do estado.
    try {
      const salvo = window.localStorage.getItem(chave);
      return salvo === null ? valorInicial : JSON.parse(salvo);
    } catch {
      return valorInicial; // Ex.: dados inválidos ou armazenamento bloqueado.
    }
  });

  useEffect(() => {
    // Efeito sincroniza estado do React com o localStorage.
    try {
      window.localStorage.setItem(chave, JSON.stringify(valor));
    } catch {
      // Nesta demo, erros de gravação não impedem a tela de funcionar.
    }
  }, [chave, valor]);

  // Mesma interface do useState, mas com persistência.
  return [valor, setValor];
}