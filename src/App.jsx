import { NavLink, Routes, Router } from "react-router"
import Ex01Titulo from "./pages/Ex01Titulo"

const pages = [
  {path:'/', label:'Home'},
  {path:'/exercicio-1', label:'01 • Effect: título'}
]

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
    </div>
  )
}