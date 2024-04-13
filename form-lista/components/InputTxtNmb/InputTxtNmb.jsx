import React from "react";
import './style.css'
function Inputs (props){
    return(
        <div className="campo-inputs">
            <div className="inputs">
                <label >Nome</label>
                <input 
                type="text"
                name="nome"
                placeholder="digite seu nome"
                value={props.estado.nome}
                onChange={props.funcEv} 
                />
            </div>
            <div className="inputs">
                <label >Telefone</label>
                <input
                type="number"
                name="numero"
                placeholder="(85) 987654321" 
                value={props.estado.numero}
                onChange={props.funcEv}
                />
            </div>
        </div>
    )
}

export default Inputs