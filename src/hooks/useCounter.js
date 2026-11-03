import { useState, useCallback } from 'react'

export function useCounter(initialValue = 0, step = 1) {
  const [count, setCount] = useState(initialValue)

  const increment = useCallback(() => setCount((c) => c + step), [step])
  const decrement = useCallback(() => setCount((c) => c - step), [step])
  const reset = useCallback(() => setCount(initialValue), [initialValue])
  const set = useCallback((value) => setCount(value), [])

  return { count, increment, decrement, reset, set }
}

export default useCounter
