import React from "react";
import PillsExample from "../components/Menu/Nav"
import  Formulario from "./Formulario"


function PaginaInicial(){


    return(
        <>
        <div class=" w-auto d-flex content-center p-2 justify-between bg-white ">
          <div>   <h1 className="font-bold  text-black"> logo</h1></div>
      <div class="p-1 d-flex mx-auto justify-center content-center">
          <PillsExample/>
        </div>

        </div>
        < Formulario/>
        </>
    )
}

export default PaginaInicial;