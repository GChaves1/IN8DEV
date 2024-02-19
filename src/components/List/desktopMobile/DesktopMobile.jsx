import React, { useState, useEffect } from 'react';

function DesktopMobile({ formDataList }) {
  const [selectedItem, setSelectedItem] = useState(0);
  const [activeButton, setActiveButton] = useState(0);
  const [dataButtons, setDataButtons] = useState(Array(4).fill({}));

  useEffect(() => {

    /* Preencher a lista dos botoes com os dados recebidos do cadastro e valores vazios */
    if (formDataList && formDataList.length > 0) {
      const newDataButtons = formDataList.slice(-4).reverse();
      const emptyDataButtons = Array(4 - newDataButtons.length).fill({});
      setDataButtons([...emptyDataButtons, ...newDataButtons]);
    } else {

      /* Se não houver dados do cadastro, preenche com valores vazios */
      setDataButtons(Array(4).fill({}));
    }
  }, [formDataList]);


  /* quando clicado a interface entende qual item está selecionado 
                 e qual botão está ativo. */
  const handleItemClick = (index) => {
    setSelectedItem(index);
    setActiveButton(index);
  };


  /*  retorna uma série de linhas de tabela para exibir os dados de um único item. */
  const spaceLine = (data) => {
    const emptySpace = Array(23).fill(' ').join('');
    const name = data ? data.name : "";
    const email = data ? data.email : "";
    const birthdate = data ? data.birthdate : "";
    const number = data ? data.number : "";

    return (
      <React.Fragment>
        <tr className='dois'>
          <td className='list__register list__name'><span className='tag'>Nome</span>{name}{emptySpace}
          <span className='list__feature'></span></td>
        </tr>
        <tr>
          <td className='list__register list__email'><span className='tag'>Email</span>{email}{emptySpace}
          <span className='list__feature'></span></td>
        </tr>
        <tr>
          <td className='list__register list__birthdate'><span className='tag'>Nasc.</span>{birthdate}{emptySpace}
          <span className='list__feature'></span></td>
        </tr>
        <tr>
          <td className='list__register list__number'><span className='tag'>Tel.</span>{number}{emptySpace}
          <span className='list__feature'></span></td>
        </tr>
      </React.Fragment>
    );
  };

  /* Cada botão permite selecionar um item na lista e pode ficar destacado se estiver ativo. */
  const numberButtons = () => {
    return dataButtons.map((data, index) => (
      <button key={index}
              className={`list__button ${activeButton === index ? 'active' : ''}`}
              onClick={() => handleItemClick(index)}>
        {index + 1}
      </button>
    ));
  };

  return (
    <section className="list section" id="lista">
      <div className="container list__container">
        <h1 className='list__title'>Lista de Dados</h1>
        <div className="list__button-container">
          {numberButtons()}
        </div>
        <table className="list__data-table">
          <tbody>
            {spaceLine(dataButtons[selectedItem])}
          </tbody>
        </table>
      </div>
      <div className="list__margin"></div>
    </section>
  );
}

export default DesktopMobile;
