import React,{ useState } from 'react';
// import { createPortal } from 'react-dom';
import BtnClose from './BtnClose';

export default function MyModal(props) {

  const [showModal, setShowModal] = useState(false);


  return (
    <>
      <button onClick={() => setShowModal(true)}>
      Detalhes
      </button>
      {showModal &&
     
          <BtnClose key={props.esteItem.id} userInfo={props.esteItem} onClose={() => setShowModal(false)} />
      }
    </>
  )
}