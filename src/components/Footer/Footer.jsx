import React, { useEffect, useState } from 'react';
import './footer.css';
import IMG from '../../assets/imagens/rodape-desktop.jpg';
import IMG2 from '../../assets/imagens/rodape-mobile.jpg';

function Footer() {

  /* tela com 600px troca para IMG2 (tela pra mobile) */

  const [imgTela, setImgTela] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setImgTela(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imgSrc = imgTela < 600 ? IMG2 : IMG;

  return (
    <section className="footer section" id="about">
      <div className="footer__container container">
        <ul className="footer__list">
          <li>
            <a href="#" className="footer__link">Fulano Beltrano de Oliveira da Silva</a>
          </li>
          <li>
            <a href="#" className="footer__link">fulanobos@agmail.com</a>
          </li>
          <li>
            <a href="#" className="footer__link">(31) 9 9999-9999</a>
          </li>
          <li>
            <a href="#" className="footer__link">Faculdade de Belo Horizonte</a>
          </li>
        </ul>
      </div>

      <img src={imgSrc} alt="img" className="footer__img" /> 
    </section>
  );
}

export default Footer;
