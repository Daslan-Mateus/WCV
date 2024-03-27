import React from 'react';
import "../styles/menu.css"
import logo from "../img/logo.png"

const Menu = () => {
  return (
    <nav className="menu">
      <img src={logo} alt="Logo" />
      <ul>
        <li><a href="">Seleção</a></li>
        <li><a href="">Cálculo</a></li>
        <li><a href="">Projeto</a></li>
        <li><a href="">Mensagens</a></li>
        <li><a href="">Histórico</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
