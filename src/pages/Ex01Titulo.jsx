import { useEffect, useState } from 'react';

export default function Ex01Titulo() {
  // useState guarda um valor que pode mudar após o clique.
  const [cliques, setCliques] = useState(0);

  useEffect(() => {
    // Sincroniza o documento (sistema externo ao React) com o estado.
    document.title = `Cliques: ${cliques} | Laboratório React`;

    // Cleanup: devolve o título original ao sair da página.
    return () => {
      document.title = 'Laboratório React: Hooks e Context';
    };
  }, [cliques]); // Repete o efeito quando 'cliques' muda.

  return (
    <section className="panel">
      <span className="eyebrow">Exercício 01 · useEffect</span>
      <h1>Contador que altera o título da aba</h1>
      <p>Observe o título da aba do navegador ao clicar.</p>
      <p className="metric">{cliques} clique(s)</p>
      <button onClick={() => setCliques((valor) => valor + 1)}>Adicionar clique</button>
      <p className="muted">Desafio: inclua um botão para zerar o contador.</p>
    </section>
  );
}