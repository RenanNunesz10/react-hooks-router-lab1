export default function Home() {
  return (
    <section className="panel">
      <span className="eyebrow">Aula prática · Single Page Application</span>
      <h1>React Hooks, Context API e React Router</h1>
      <p>
        Use o menu à esquerda para abrir os cinco exercícios. Todas as páginas
        fazem parte da mesma SPA, sem atualização completa do navegador.
      </p>
      <ol>
        <li>Sincronizar o título da aba usando <code>useEffect</code>.</li>
        <li>Monitorar a janela e remover um event listener.</li>
        <li>Compartilhar um tema global com Context API.</li>
        <li>Reutilizar lógica com o hook personalizado <code>useCounter</code>.</li>
        <li>Persistir favoritos usando <code>useLocalStorage</code>.</li>
      </ol>
      <p className="muted">Experimente alternar as páginas e recarregar o navegador.</p>
    </section>
  );
}