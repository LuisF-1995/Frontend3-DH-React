import React from "react";
import Perritos from "../Perritos/perritos";


const ContainerP = ({perritos}) => {

    return(
        <div>
        {
            perritos.map( (perrito) => <Perritos Nombre={perrito.Nombre} Edad={perrito.Edad} Sexo={perrito.Sexo} 
            Raza={perrito.Raza} Tamanio={perrito.Tamanio} /> )
        }
        </div>
    )

}


export default ContainerP;