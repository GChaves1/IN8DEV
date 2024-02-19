// Register.js
import React, { useState } from 'react';
import './register.css';



function Register({ onFormSubmit }) {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthdate: '',
    number: ''
  });


  /* define a formatação de alguns campos, como data de nascimento e número de telefone. */
  const inputChange = event => {
    const { name, value } = event.target;
    if (name === 'birthdate') {
      const formattedValue = formatBirthdate(value);
      setFormData({
        ...formData,
        [name]: formattedValue
      });
    } else if (name === 'number') {
      let formattedNumber = value.replace(/\D/g, ''); 
      if (formattedNumber.length > 0) {
        formattedNumber = '(' + formattedNumber.substring(0, 2) + ') ' + 
                          formattedNumber.substring(2, 3) + ' ' + 
                          formattedNumber.substring(3, 7) + '-' + 
                          formattedNumber.substring(7, 11); 
      }
      setFormData({
        ...formData,
        [name]: formattedNumber
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };


  /* Analisa a data de nascimento fornecida e formata de acordo com o formato correto (dia/mês/ano) */
  const formatBirthdate = value => {
    const cleaned = value.replace(/[^0-9]/g, ''); 
    let formatted = '';
    if (cleaned.length <= 2) {
      formatted = cleaned.slice(0, 2);
      if (parseInt(formatted, 10) > 31) {
        formatted = '31'; 
      }
    } else if (cleaned.length <= 4) {
      const day = cleaned.slice(0, 2);
      const month = cleaned.slice(2, 4);
      formatted = `${day}/${month}`;
      if (parseInt(month, 10) > 12) {
        formatted = `${day}/12`; 
      }
    } else {
      const day = cleaned.slice(0, 2);
      const month = cleaned.slice(2, 4);
      let year = cleaned.slice(4, 8);
      if (year.length === 4 && parseInt(year, 10) > currentYear) {
        year = currentYear.toString();
      }
      formatted = `${day}/${month}/${year}`;
    }
    return formatted;
  };

  const handleSubmit = event => {
    event.preventDefault();
    onFormSubmit(formData); 
    setFormData({ 
      name: '',
      email: '',
      birthdate: '',
      number: ''
    });
  };

  return (
    <section className="cadastro section container" id="cadastro">
      <h1 className="cadastro__title">
        CADASTRO
      </h1>
      <form className="cadastro__form" onSubmit={handleSubmit}>
        <div className="cadastro__form-div">
          <label className="cadastro__form-tag">Nome</label>
          <input
            type="text"
            name='name'
            className='cadastro__form-input'
            placeholder=' '
            value={formData.name}
            onChange={inputChange}
            required
          />
        </div>

        <div className="cadastro__form-div">
          <label className="cadastro__form-tag">Email</label>
          <input
            type="email"
            name='email'
            className='cadastro__form-input'
            placeholder=' '
            value={formData.email}
            onChange={inputChange}
            required
          />
        </div>

        <div className="cadastro__form-div">
          <label className="cadastro__form-tag">Nascimento</label>
          <input
            type="text"
            name="birthdate"
            value={formData.birthdate}
            onChange={inputChange}
            maxLength="10"
            className='cadastro__form-input'
            required
          />
        </div>

        <div className="cadastro__form-div cadastro__form-area">
          <label className="cadastro__form-tag">Telefone</label>
          <input
            type="text"
            name='number'
            className='cadastro__form-input'
            placeholder=' '
            value={formData.number}
            onChange={inputChange}
            required
          />
        </div>
        <button type="submit" className="button button--flex">
          CADASTRAR
        </button>
        
      </form>
      
    </section>
  );
}

export default Register;
