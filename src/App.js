// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import List from './components/List/List';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
  
  const [formDataList, setFormDataList] = useState(() => {
    const storedData = localStorage.getItem('formDataList');
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    localStorage.setItem('formDataList', JSON.stringify(formDataList));
  }, [formDataList]);

  const handleFormSubmit = formData => {
    setFormDataList([...formDataList, formData]);
  };

  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <Register onFormSubmit={handleFormSubmit} />
        <List formDataList={formDataList} />
        <Footer />
      </main>

      <ScrollUp />
    </>
  );
}

export default App;