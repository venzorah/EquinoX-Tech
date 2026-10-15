import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function App() {
  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="page-title">
        <p className="eyebrow">EquinoX Tech</p>
        <h1 id="page-title">Technology that moves your business forward.</h1>
        <p className="intro">
          We build websites, mobile apps, software solutions and digital experiences for modern businesses.
        </p>
        <a className="cta" href="mailto:hello@equinox-tech.com">Start a conversation</a>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
