import React from 'react';
import './home.css';
import IMG from '../../assets/imagens/index-image.jpg';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__content  grid">
        <div className="image-container">
          <img src={IMG} alt="Foto principal" className="home__image" />
          <div className="home__text container">
            <div className="home__word">
              <p className="home__title">ESTÁGIO <span className='sub__title'>PROVA DE SELEÇÃO</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
