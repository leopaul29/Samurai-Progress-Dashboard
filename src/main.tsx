import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import '@progress/kendo-theme-fluent/dist/all.css';

// IMPORTANT: Import i18n config BEFORE any components that use translations
import './i18n/config';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
