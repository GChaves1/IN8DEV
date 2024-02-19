// List.jsx
import React, { useEffect, useState } from 'react';
import './list.css';
import DesktopList from './desktopList/DesktopList.jsx';
import DesktopMobile from './desktopMobile/DesktopMobile.jsx';

const List = ({ formDataList }) => {

  /* tela com 600px troca para DesktopMobile (lista para mobile) */

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const ListComponent = windowWidth < 600 ? DesktopMobile : DesktopList;

  return (
    <div>
      <ListComponent formDataList={formDataList} />
    </div>
  );
}

export default List;