import React from "react";
    // import MyModal from '../components/Modal/Modal'
// import {Button, Card} from 'react-bootstrap';

const Listagem =  () => {
    // const candidatos = props.ListaCandidatos ;
    // const handleClick = (removeCand) => {
    //     props.delete(removeCand)
    // };

    return (
        <div >
            
            <h3>Lista de Candidatos</h3>
                <button className='btnSortList' >
               Do mais Antigo
                </button>
                <button className='btnSortList'>
                Do mais Recente
                </button>
              
            
            {/* { candidatos.map((candidato)=>

            <Card key={candidato.id}>
                <Card.Header>{candidato.nome}</Card.Header>
              <Card.Body>
               
                <Button variant="primary" onClick={()=>handleClick(candidato.id)}>Excluir</Button>
            
              <MyModal esteItem={candidato} />
              </Card.Body>
            </Card>
             )
            } */}
        </div>
    )
   
}
 export default Listagem

