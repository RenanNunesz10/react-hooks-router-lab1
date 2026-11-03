# AGENTS.md — react-hooks-router-lab

## Visão geral

Laboratório de estudos em **React** focado em três temas:

1. **Context API** — compartilhamento de estado global (ex.: tema claro/escuro).
2. **Hooks customizados** — reuso de lógica de estado/efeitos (`useCounter`, `useLocalStorage`, `useTitulo`, `useResize`).
3. **React Router** — navegação entre páginas/exercícios com rotas e parâmetros.

O projeto é uma SPA em JavaScript/JSX (sem TypeScript), construída com **Vite** e **React 19**. É um repositório de estudo: os componentes de página e os hooks estão, em sua maioria, vazios e devem ser implementados seguindo as convenções abaixo.

## Stack

- React `^19.2.8` / React DOM `^19.2.8`
- Vite `^8.3.0` (`@vitejs/plugin-react`)
- ESLint `^10.10.0` + `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh`
- Estilo: CSS puro (`index.css`, `styles.css`, `App.css`) — sem CSS-in-JS nem Tailwind.
- Roteamento: **react-router-dom** (a adicionar como dependência quando implementar as rotas).

Não há backend; todo o estado é client-side.

## Comandos

```bash
npm install          # instala dependências
npm run dev          # servidor de desenvolvimento (Vite)
npm run build        # build de produção
npm run lint         # ESLint
npm run preview      # preview do build
```

No Windows/PowerShell, prefira executar a partir da raiz do repositório.

## Estrutura de diretórios

```
src/
  main.jsx                 # entry point (createRoot + StrictMode)
  App.jsx                  # shell da aplicação (layout + rotas)
  App.css                  # estilos do template inicial (legado, pouco usado)
  index.css                # estilos globais base (tema claro/escuro via CSS vars)
  styles.css               # layout do lab: sidebar, nav, painel, cards
  context/
    ThemeContext.jsx        # Context API para tema (claro/escuro)
  hooks/
    useCounter.js          # hook customizado: contador
    useLocalStorage.js     # hook customizado: estado sincronizado com localStorage
  pages/
    Home.jsx               # página inicial
    Ex01Titulo.jsx         # exercício: hook useTitulo (document.title)
    Ex02Resize.jsx         # exercício: hook useResize (dimensões da janela)
    Ex03Context.jsx        # exercício: consumo do ThemeContext
    Ex04Counter.jsx        # exercício: uso do useCounter
    Ex05Favoritos.jsx      # exercício: favoritos com useLocalStorage + rota dinâmica
public/                    # assets estáticos
index.html                 # HTML base
```

## Layout e estilos

`styles.css` define o layout principal:

- `.layout` — grid de 2 colunas: sidebar (265px) + conteúdo. Variáveis CSS `--bg`, `--card`, `--text`, `--sub`, `--border`.
- `.layout.dark` — tema escuro (troca as variáveis).
- `.sidebar` — marca, descrição e `nav` com links; link ativo usa classe `.active`.
- `.content` / `.panel` — área principal com cartão.
- Utilitários: `.eyebrow`, `.metric`, `.muted`, `.cards`, `.subpanel`, `.actions`, `.secondary`.

Componentes devem reutilizar essas classes em vez de criar estilos novos. O tema é aplicado adicionando/removendo a classe `dark` em `.layout`.

## Convenções de código

- **Componentes funcionais** com hooks; sem classes.
- Arquivos de componente em `PascalCase.jsx` (`Home.jsx`, `Ex01Titulo.jsx`).
- Hooks customizados em `camelCase.js` começando com `use` (`useCounter.js`).
- Contexts em `PascalCase.jsx` com sufixo `Context` (`ThemeContext.jsx`).
- Um componente/hook por arquivo; export default para componentes de página e hooks.
- Imports relativos a partir de `src/` (ex.: `../context/ThemeContext`, `../hooks/useCounter`).
- JSX com indentação de 2 espaços; aspas duplas para strings, simples para JSX quando apropriado (seguir o padrão do Vite).
- Sem TypeScript: não adicionar tipagem nem arquivos `.ts/.tsx`.
- Manter o ESLint limpo (`npm run lint` sem erros) — respeitar `react-hooks` rules (deps de `useEffect`, etc.).
- Componentes de página devem ser "burros" quanto a layout global: o shell (`App.jsx`) fornece sidebar/layout.

## Context API — ThemeContext

Arquivo: `src/context/ThemeContext.jsx`.

Responsabilidades esperadas:

- Criar `ThemeContext` com `createContext`.
- Provider (`ThemeProvider`) que mantém estado `theme` (`'light' | 'dark'`) e função `toggleTheme`.
- Exportar hook `useTheme()` que consome o contexto e lança erro se usado fora do provider.
- Persistir a preferência em `localStorage` (reaproveitar `useLocalStorage`) e aplicar a classe `dark` em `.layout`.
- Envolver a árvore de rotas em `main.jsx` ou `App.jsx`.

## Hooks customizados

### `useCounter` (`src/hooks/useCounter.js`)

- Assinatura sugerida: `useCounter(initialValue = 0, step = 1)`.
- Retorna `{ count, increment, decrement, reset, set }` (ou tupla `[count, actions]` — manter consistente com o exercício).
- Usar `useState` e `useCallback` para estabilidade das funções.

### `useLocalStorage` (`src/hooks/useLocalStorage.js`)

- Assinatura: `useLocalStorage(key, initialValue)`.
- Retorna `[value, setValue]` estilo `useState`, sincronizando com `localStorage`.
- Tratar JSON parse/stringify e erros de storage; inicializar a partir do storage (lazy init).

### Hooks dos exercícios (a criar quando implementar)

- `useTitulo(titulo)` — define `document.title` via `useEffect`.
- `useResize()` — retorna `{ width, height }` atualizados no evento `resize` (com cleanup).

Convenção: hooks de exercício podem viver em `src/hooks/` ou dentro da própria página, mas preferir `src/hooks/` para reuso.

## React Router

A ser adicionado (`react-router-dom`). Padrão sugerido:

- `BrowserRouter` em `main.jsx` (ou `App.jsx`).
- `App.jsx` renderiza o layout (sidebar + `<Outlet />`).
- Rotas:
  - `/` → `Home`
  - `/ex01` → `Ex01Titulo`
  - `/ex02` → `Ex02Resize`
  - `/ex03` → `Ex03Context`
  - `/ex04` → `Ex04Counter`
  - `/ex05` → `Ex05Favoritos`
  - `/ex05/:id` → detalhe de favorito (opcional)
- Sidebar usa `NavLink` com classe ativa (estilo `.active` já definido).
- `Ex05Favoritos` usa `useParams`/`useNavigate` para demonstrar parâmetros e navegação programática.

## Exercícios (escopo esperado)

- **Ex01Titulo**: input controlado que atualiza `document.title` via `useTitulo`.
- **Ex02Resize**: exibe largura/altura da janela atualizadas em tempo real via `useResize`.
- **Ex03Context**: toggle de tema consumindo `useTheme()` (Context API).
- **Ex04Counter**: demonstra `useCounter` com incremento/decremento/reset e step.
- **Ex05Favoritos**: CRUD simples de favoritos persistidos em `localStorage` (via `useLocalStorage`), com listagem e detalhe por rota.

## Orientações para agentes

- Antes de editar, leia os arquivos relevantes; muitos estão vazios de propósito (esqueleto).
- Não modificar `node_modules/`, `package-lock.json` manualmente nem arquivos de assets sem necessidade.
- Não apagar o CSS existente; os exercícios dependem das classes de `styles.css`.
- Ao adicionar dependências (ex.: `react-router-dom`), atualizar `package.json` e documentar no PR/commit.
- Manter textos da UI em **português** (projeto de estudo em PT-BR).
- Implementar um exercício por vez, com commits pequenos e descritivos.
- Garantir que `npm run lint` passe após mudanças.
- Não introduzir TypeScript nem frameworks de estilo.
- Preferir `useEffect` com cleanup e arrays de dependência corretos.
- Evitar prop drilling: usar Context quando o estado for compartilhado por várias rotas.

## O que NÃO fazer

- Não converter o projeto para TS.
- Não substituir Vite por outro bundler.
- Não remover o template de `App.css` se não for necessário (pode ser ignorado, mas não quebrar imports).
- Não commitar segredos ou arquivos de ambiente.

## Status atual

- Implementação concluída: hooks (`useCounter`, `useLocalStorage`, `useTitulo`, `useResize`), `ThemeContext`, páginas e shell com React Router.
- Dependência `react-router-dom` adicionada.
- `App.jsx` renderiza o layout (sidebar + rotas) e consome `useTheme`.
- `main.jsx` envolve a árvore com `BrowserRouter` e `ThemeProvider`, importando `index.css` e `styles.css`.
- Lint e build passando.
