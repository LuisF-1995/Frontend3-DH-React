import React from 'react';


const Perritos = ({Nombre, Edad,Sexo,Raza,Tamanio}) => {

    return(
        <>
            <h2>Nombre: {Nombre}</h2>
            <ul>
                <li>Edad: {Edad}</li>
                <li>Sexo: {Sexo}</li>
                <li>Raza: {Raza}</li>
                <li>Tamaño: {Tamanio}</li>
            </ul>
        </>
    )

}

export default Perritos;