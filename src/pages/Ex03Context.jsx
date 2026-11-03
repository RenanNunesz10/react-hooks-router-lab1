import { useTheme } from '../context/ThemeContext'

export default function Ex03Context() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="panel">
      <p className="eyebrow">Exercício 03</p>
      <h1>Context API — Tema</h1>
      <p className="muted">
        O tema é compartilhado por toda a aplicação via Context.
      </p>
      <p>Tema atual: {theme}</p>
      <div className="actions">
        <button onClick={toggleTheme}>Alternar tema</button>
      </div>
    </div>
  )
}
