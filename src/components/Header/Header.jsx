import React, { useState, useEffect } from 'react';
import './header.css';
import IMG from '../../assets/icones/logo-in8-dev.svg';

const Header = () => {

  /* ao clicar no sanduiche abre o navbar */
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  /* ativa header fixo apartir do max-width: 767px */
  useEffect(() => {
    function scrollHeader(){
      const header = document.getElementById('header')
    
      if (header && window.scrollY >= 50) {
        header.classList.add('scroll-header');
      } else if (header) {
        header.classList.remove('scroll-header');
      }
    }
    
    window.addEventListener('scroll', scrollHeader);

    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);

  return (
    <header className="header" id="header" >
      <nav className={`nav container ${isActive ? 'active' : ''}`}>
        <a href="/" className="logo">
          <img src={IMG} alt="" />
        </a>
        <button className="hamburger" onClick={toggleMenu}></button>
        <ul className="nav-list">
          <li><a href="#cadastro">Cadastro</a></li>
          <li><a href="#lista"><span className='uil'></span>Lista</a></li>
          <li><a href="#about"><span className='uil'></span>Sobre mim</a></li>
        </ul>
      </nav>
      <main className="hero"></main>
    </header>
  );
}

export default Header;
