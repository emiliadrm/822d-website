import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import Root from './root.tsx';


const rootElement = document.getElementById('root')!
rootElement.className = 'w-full min-h-screen overflow-x-hidden'

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
        <Root/>
    </BrowserRouter>
  </StrictMode>
)
