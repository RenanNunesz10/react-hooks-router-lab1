import { useContext } from 'react';
import { NavLink, Route, Routes } from 'react-router';
import { ThemeContext } from './context/ThemeContext.jsx';
import Home from './pages/Home.jsx';
import Ex01Titulo from './pages/Ex01Titulo.jsx';
import Ex02Resize from './pages/Ex02Resize.jsx';
import Ex03Context from './pages/Ex03Context.jsx';
import Ex04Counter from './pages/Ex04Counter.jsx';
import Ex05Favoritos from './pages/Ex05Favoritos.jsx';

const paginas = [
  { caminho: '/', rotulo: 'Início' },
  { caminho: '/exercicio-1', rotulo: '01 · Effect: título' },
  { caminho: '/exercicio-2', rotulo: '02 · Effect: resize' },
  { caminho: '/exercicio-3', rotulo: '03 · Context API' },
  { caminho: '/exercicio-4', rotulo: '04 · Custom Hook' },
  { caminho: '/exercicio-5', rotulo: '05 · Integração' },
];

export default function App() {
  // O tema é compartilhado com TODAS as páginas pelo Context API.
  const { tema } = useContext(ThemeContext);

  return (
    <div className={`layout ${tema === 'escuro' ? 'dark' : ''}`}>
      <aside className="sidebar">
        <div className="brand">⚛ Laboratório React</div>
        <p>5 exercícios demonstrativos</p>

        <nav aria-label="Exercícios">
          {paginas.map((pagina) => (
            // NavLink aplica 'active' automaticamente na rota selecionada.
            <NavLink key={pagina.caminho} to={pagina.caminho} end>
              {pagina.rotulo}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="content">
        {/* React Router escolhe apenas o componente da rota atual. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercicio-1" element={<Ex01Titulo />} />
          <Route path="/exercicio-2" element={<Ex02Resize />} />
          <Route path="/exercicio-3" element={<Ex03Context />} />
          <Route path="/exercicio-4" element={<Ex04Counter />} />
          <Route path="/exercicio-5" element={<Ex05Favoritos />} />
          <Route path="*" element={<h2>Página não encontrada.</h2>} />
        </Routes>
      </main>
    </div>
  );
}