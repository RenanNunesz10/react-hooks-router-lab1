import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function Ex05Favoritos() {
  const [favoritos, setFavoritos] = useLocalStorage('favoritos', [])
  const [novo, setNovo] = useState('')

  const adicionar = () => {
    const nome = novo.trim()
    if (!nome) return
    setFavoritos((prev) => [...prev, { id: Date.now(), nome }])
    setNovo('')
  }

  const remover = (id) => {
    setFavoritos((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div className="panel">
      <p className="eyebrow">Exercício 05</p>
      <h1>Favoritos</h1>
      <p className="muted">Persistidos em localStorage via useLocalStorage.</p>
      <div className="actions">
        <input
          type="text"
          value={novo}
          onChange={(e) => setNovo(e.target.value)}
          placeholder="Novo favorito"
          style={{ flex: 1, minWidth: 220 }}
        />
        <button onClick={adicionar}>Adicionar</button>
      </div>
      {favoritos.length === 0 ? (
        <p className="muted">Nenhum favorito ainda.</p>
      ) : (
        <ul style={{ marginTop: 16, paddingLeft: 20 }}>
          {favoritos.map((item) => (
            <li key={item.id} style={{ marginBottom: 8 }}>
              {item.nome}{' '}
              <button className="secondary" onClick={() => remover(item.id)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
