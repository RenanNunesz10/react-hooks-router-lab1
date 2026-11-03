import { useResize } from '../hooks/useResize'

export default function Ex02Resize() {
  const { width, height } = useResize()

  return (
    <div className="panel">
      <p className="eyebrow">Exercício 02</p>
      <h1>Dimensões da janela</h1>
      <p className="muted">Redimensione a janela para ver os valores atualizarem.</p>
      <p className="metric">
        {width} × {height}
      </p>
    </div>
  )
}
