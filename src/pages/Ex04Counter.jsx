import { useState } from 'react'
import { useCounter } from '../hooks/useCounter'

export default function Ex04Counter() {
  const [step, setStep] = useState(1)
  const { count, increment, decrement, reset } = useCounter(0, step)

  return (
    <div className="panel">
      <p className="eyebrow">Exercício 04</p>
      <h1>Contador</h1>
      <p className="muted">Demonstração do hook customizado useCounter.</p>
      <p className="metric">{count}</p>
      <div className="actions">
        <button onClick={decrement}>−</button>
        <button onClick={increment}>+</button>
        <button className="secondary" onClick={reset}>
          Reset
        </button>
      </div>
      <div className="actions" style={{ marginTop: 12 }}>
        <label>
          Passo:{' '}
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value) || 1)}
            style={{ width: 80 }}
          />
        </label>
      </div>
    </div>
  )
}
