import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const tecnologias = ['React', 'Vite', 'React Router', 'JavaScript'];

export default function Ex05Favoritos() {
  const { tema } = useContext(ThemeContext); // Contexto do exercício 03.
  const [favoritos, setFavoritos] = useLocalStorage('lab-favoritos', []);

  function alternarFavorito(tecnologia) {
    // Atualiza o array SEM modificá-lo diretamente.
    setFavoritos((anteriores) =>
      anteriores.includes(tecnologia)
        ? anteriores.filter((item) => item !== tecnologia)
        : [...anteriores, tecnologia]
    );
  }

  return (
    <section className="panel">
      <span className="eyebrow">Exercício 05 · integração</span>
      <h1>Favoritos persistentes</h1>
      <p>
        Contexto global: <strong>{tema}</strong> · Favoritos: <strong>{favoritos.length}</strong>
      </p>
      <div className="cards">
        {tecnologias.map((tecnologia) => {
          const favorito = favoritos.includes(tecnologia);
          return (
            <div className="subpanel" key={tecnologia}>
              <h2>{tecnologia}</h2>
              <button onClick={() => alternarFavorito(tecnologia)}>
                {favorito ? '★ Remover dos favoritos' : '☆ Favoritar'}
              </button>
            </div>
          );
        })}
      </div>
      <p className="muted">Troque de rota e atualize a página: os favoritos continuam salvos.</p>
      <p className="muted">Desafio: crie um botão para limpar todos os favoritos.</p>
    </section>
  );
}