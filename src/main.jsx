import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MovieHunt from './MovieHunt.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieHunt />
  </StrictMode>,
)
