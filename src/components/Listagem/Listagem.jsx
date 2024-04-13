import React from "react";
import MyModal from '../Modal/Modal'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Listagem =  (props) => {
    const candidatos = props.ListaCandidatos ;
    const handleClick = (removeCand) => {
        props.delete(removeCand)
    };

    return (
        <div >{ candidatos.map((candidato)=>

            <Card key={candidato.id}>
                <Card.Header>{candidato.nome}</Card.Header>
              <Card.Body>
               
                <Button variant="primary" onClick={()=>handleClick(candidato.id)}>Excluir</Button>
            
              <MyModal esteItem={candidato} />
              </Card.Body>
            </Card>
             )
            }
        </div>
    )
   
}
 export default Listagem

