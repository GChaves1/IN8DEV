import React, { useEffect } from 'react';
import './scrollup.css';
import arrowTop from '../../assets/icones/topo-pag.svg';

const ScrollUp = () => {
  useEffect(() => {
    const scrollUp = document.querySelector(".scrollup");
    const handleScroll = () => {
      if (window.scrollY >= 160) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a href="#" className="scrollup" onClick={handleClick}>
      <img src={arrowTop} alt="Topo da Página" className="scrollup__icon" />
    </a>
  );
};

export default ScrollUp;



