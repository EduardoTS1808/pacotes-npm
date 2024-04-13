import React from "react";
import './style.css'

function ButtonEnv (props){


    return (
        <div className="container-btn">
            {/* <button className="btn" type="submit" >Condidatar-se</button> */}
            <button className="btn" type={props.typeBotton} >{props.texto}</button>
        </div>
    )
}

export default ButtonEnv