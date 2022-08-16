import React from "react";

function Lista ({indice, nombre, edad, sexo}){
    return (
        <ul>
            <li>
            <p>{indice}</p>
                <p>Nombre: {nombre}</p>
                <p>Edad: {edad}</p>
                <p>Sexo: {sexo}</p>
            </li>
        </ul>
    )
}

export default Lista;