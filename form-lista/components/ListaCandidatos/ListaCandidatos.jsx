import React from "react";
import MyModal from '../Modal/Modal'

const ListaCandidatos =  (props) => {
    const candidatos = props.ListaCandidatos 
    const handleClick = (removeCand) => {
        props.delete(removeCand)
        console.log(removeCand)
    };
      
    const lista = {
        display: 'flex',
        with:'100%',
        alignItems: 'center',
        height: '145px',
        background: '#e9e9e9',
        margin:' 50px 10px '
    }
    const itemStyle = {
        display: 'flex',
        margin: '15px',
        padding: '15px',
        fontSize: '16px',
        color: '#232323',
        borderBottom: '2px solid #222222'
    }
    const botons = {display: 'block'}
    return (
        <div  >
            <div   >{ candidatos.map((candidato)=>
            <div key={candidato.id}>
                 <div style={lista}>
                     <div  style={{display: 'block',background: '#e9e9e9', margin:'10px' }} >
                            <p style={itemStyle}> {candidato.nome}</p>  
                     </div>
                      <div style={botons}>
                        <button type="button" onClick={()=>handleClick(candidato.id)}>Deletar</button>
                       <MyModal esteItem={candidato} />
                      </div>
                </div>
            </div>
            )
        }
            </div>

        </div>
    )
   
}

export default ListaCandidatos