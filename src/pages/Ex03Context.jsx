import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';

export default function Ex03Context() {
  // Lê o estado global sem passar props por todas as páginas.
  const { tema, alternarTema } = useContext(ThemeContext);

  return (
    <section className="panel">
      <span className="eyebrow">Exercício 03 · Context API</span>
      <h1>Tema global compartilhado</h1>
      <p>Tema atual: <strong>{tema}</strong></p>
      <button onClick={alternarTema}>Alternar tema</button>
      <p className="muted">
        Navegue para outro exercício: o tema permanece porque o
        ThemeProvider fica acima do React Router.
      </p>
      <p className="muted">Desafio: adicione um terceiro tema (azul).</p>
    </section>
  );
}