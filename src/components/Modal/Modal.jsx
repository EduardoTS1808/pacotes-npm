import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function  MyModal(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
       Detalhes
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        key={props.esteItem.id} 
        esteItem={props.esteItem}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Mais detalhes sobre - {props.esteItem.nome}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <div  >
                <p>Telefone: {props.esteItem.numero}</p>
                <p>Cidade: {props.esteItem.cidade}</p>
                <p>Estatus Civil: {props.esteItem.estado}</p>
             </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyModal;