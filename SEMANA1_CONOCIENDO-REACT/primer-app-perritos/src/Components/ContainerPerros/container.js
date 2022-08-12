import React from "react";
import Perritos from "../Perritos/perritos";


const ContainerPerritos = ({tituloPpal, perritos}) => {

    return(
        <div>
        <h1>{tituloPpal}</h1>
        {
            perritos.map( (perrito) => <Perritos Nombre={perrito.Nombre} Edad={perrito.Edad} Sexo={perrito.Sexo} 
            Raza={perrito.Raza} Tamanio={perrito.Tamanio} /> )
        }
        </div>
    )

}


export default ContainerPerritos;