import { useEffect, useState } from 'react';

export default function Ex02Resize() {
  // Lê a largura inicial da janela ao criar o componente.
  const [largura, setLargura] = useState(window.innerWidth);

  useEffect(() => {
    function atualizarLargura() {
      setLargura(window.innerWidth);
    }

    // Inscreve o componente em um evento do navegador.
    window.addEventListener('resize', atualizarLargura);

    // Cleanup é executado ao sair desta rota.
    // Evita que um listener antigo continue ativo.
    return () => window.removeEventListener('resize', atualizarLargura);
  }, []); // Nenhuma dependência: não precisa reinscrever a cada render.

  return (
    <section className="panel">
      <span className="eyebrow">Exercício 02 · useEffect + cleanup</span>
      <h1>Monitor de largura da janela</h1>
      <p>Redimensione o navegador e acompanhe a medida:</p>
      <p className="metric">{largura} px</p>
      <p>{largura < 768 ? '📱 Tela estreita' : '🖥️ Tela larga'}</p>
      <p className="muted">Desafio: mostre também window.innerHeight.</p>
    </section>
  );
}