import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container-menu">
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__list-item"><a href="#" className="menu__list-link">На главную</a></li>
            <li className="menu__list-item"><a href="#" className="menu__list-link">Проекты</a></li>
            <li className="menu__list-item"><a href="#" className="menu__list-link">Контакты</a></li>
            <li className="menu__list-item"><a href="#" className="menu__list-link">Новости</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
