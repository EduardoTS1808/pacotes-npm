import React from "react";

function MsgErro (){
    const msg ={
        color: "#ff0"
    }
    return(
        <div>
            <p style={msg}>Preencha todos os campos</p>
        </div>
    )
}

export default MsgErro