import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RecuperarSenha from './RecuperarSenha/index.tsx'
import { ConfirmarEmail } from './ConfirmarEmail/index.tsx'
import { Teletubies } from './convertHTML/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfirmarEmail/>
    {/* <RecuperarSenha/> */}

    <Teletubies/>
  </React.StrictMode>,
)
