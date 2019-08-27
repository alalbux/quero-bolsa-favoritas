import React from 'react'
import Logo from './Logo'
import './Header.css'

const Header = () => (
  <div
    className='Header'
  >
    <div>
      <p>Como funciona?</p>
    </div>
    <div>
      <p>0800 123 2222</p> 
      <p>Envie mensagem ou ligue</p>
    </div>
    <div><Logo /></div>
    <div>
      <span>Nome Sobrenome</span>
    </div>
  </div>
)

export default Header
