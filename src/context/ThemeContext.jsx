import { createContext, useState } from 'react';

// Cria o contexto: representa o tipo de dado compartilhado.
export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  // O estado fica no componente provedor, acima das páginas.
  const [tema, setTema] = useState('claro');

  function alternarTema() {
    setTema((anterior) => (anterior === 'claro' ? 'escuro' : 'claro'));
  }

  return (
    // Qualquer descendente pode ler 'tema' e 'alternarTema' usando useContext.
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}