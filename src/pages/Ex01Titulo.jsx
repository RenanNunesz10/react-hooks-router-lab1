import { useState } from 'react'
import { useTitulo } from '../hooks/useTitulo'

export default function Ex01Titulo() {
  const [titulo, setTitulo] = useState('Laboratório React')

  useTitulo(titulo)

  return (
    <div className="panel">
      <p className="eyebrow">Exercício 01</p>
      <h1>Título da página</h1>
      <p className="muted">
        O título da aba do navegador acompanha o valor do input.
      </p>
      <div className="actions">
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Digite um título"
          style={{ flex: 1, minWidth: 220 }}
        />
      </div>
    </div>
  )
}
