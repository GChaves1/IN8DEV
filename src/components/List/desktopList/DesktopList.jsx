
import React from 'react';

function DesktopList({ formDataList }) {

  /* garante so menos 4 elementos. Se não tiver dados suficientes, adiciona elementos vazios para preencher até 4 */

  const limitedList = formDataList ? formDataList.slice(-4) : [];

  while (limitedList.length < 4) {
    limitedList.unshift({}); 
  }


  /* Cria linhas de tabela com os dados do cadastro, cada linha contém 
  nome, email, data de nascimento e número. São organizados em uma tabela. */
  const renderRows = () => {
    return limitedList.map((formData, index) => (
      <tr className='list__table-register' key={index}>
        <td className='list__register list__user'>
          <span className='list__number'>{4 - index}</span>
        </td>
        <td className='list__register list__name'>{formData.name}</td>
        <td className='list__register list__email'>{formData.email}</td>
        <td className='list__register list__birthdate'>{formData.birthdate}</td>
        <td className='list__register list__number'>{formData.number}</td>
      </tr>
    )).reverse();
  };

  return (
    <section className="list section " id="lista">
      <div className=" container list__container" >
        <h1 className='list__title'>Lista de Dados</h1>
        <table className="list__data-table">
          <thead>
            <tr>
              <th className='list__header'></th>
              <th className='list__header'>Nome</th>
              <th className='list__header'>Email</th>
              <th className='list__header'>Nascimento</th>
              <th className='list__header'>Telefone</th>
            </tr>
          </thead>
          <thead>
            {renderRows()}
          </thead>
        </table>
      </div>
      <div className="list__margin"></div>
    </section>
  );
}

export default DesktopList;