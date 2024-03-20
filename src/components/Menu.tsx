import React from 'react';
import "../styles/menu.css"

const Menu = () => {
  return (
    <nav className="menu">
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
