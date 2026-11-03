export default function Home() {
  return (
    <div className="panel">
      <p className="eyebrow">Laboratório React</p>
      <h1>Bem-vindo</h1>
      <p>
        Estude Context API, Hooks Customizados e React Router navegando pelos
        exercícios no menu lateral.
      </p>
      <div className="cards">
        <div className="subpanel">
          <h2>Ex01 — Título</h2>
          <p className="muted">Hook customizado que atualiza document.title.</p>
        </div>
        <div className="subpanel">
          <h2>Ex02 — Resize</h2>
          <p className="muted">Hook customizado que observa o tamanho da janela.</p>
        </div>
        <div className="subpanel">
          <h2>Ex03 — Context</h2>
          <p className="muted">Consumo de Context API para tema claro/escuro.</p>
        </div>
        <div className="subpanel">
          <h2>Ex04 — Counter</h2>
          <p className="muted">Hook customizado useCounter com step.</p>
        </div>
        <div className="subpanel">
          <h2>Ex05 — Favoritos</h2>
          <p className="muted">Persistência com useLocalStorage.</p>
        </div>
      </div>
    </div>
  )
}
