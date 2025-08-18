import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Pagina from './Pages/Pagina.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Pagina />
  </StrictMode>,
)
