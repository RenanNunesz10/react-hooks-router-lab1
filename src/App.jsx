import { NavLink, Routes, Route } from 'react-router-dom'
import { useTheme } from './context/ThemeContext'
import Home from './pages/Home'
import Ex01Titulo from './pages/Ex01Titulo'
import Ex02Resize from './pages/Ex02Resize'
import Ex03Context from './pages/Ex03Context'
import Ex04Counter from './pages/Ex04Counter'
import Ex05Favoritos from './pages/Ex05Favoritos'

const pages = [
  { path: '/', label: 'Home' },
  { path: '/ex01', label: '01 • Título' },
  { path: '/ex02', label: '02 • Resize' },
  { path: '/ex03', label: '03 • Context' },
  { path: '/ex04', label: '04 • Counter' },
  { path: '/ex05', label: '05 • Favoritos' },
]

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`layout ${theme === 'dark' ? 'dark' : ''}`}>
      <aside className="sidebar">
        <div className="brand">⚛ Laboratório React</div>
        <p>5 exercícios demonstrativos</p>

        <nav aria-label="Exercícios">
          {pages.map((pagina) => (
            <NavLink
              key={pagina.path}
              to={pagina.path}
              end={pagina.path === '/'}
            >
              {pagina.label}
            </NavLink>
          ))}
        </nav>

        <div className="actions" style={{ marginTop: 24 }}>
          <button className="secondary" onClick={toggleTheme}>
            Tema: {theme}
          </button>
        </div>
      </aside>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ex01" element={<Ex01Titulo />} />
          <Route path="/ex02" element={<Ex02Resize />} />
          <Route path="/ex03" element={<Ex03Context />} />
          <Route path="/ex04" element={<Ex04Counter />} />
          <Route path="/ex05" element={<Ex05Favoritos />} />
          <Route path="*" element={<h2>Página não encontrada.</h2>} />
        </Routes>
      </main>
    </div>
  )
}
