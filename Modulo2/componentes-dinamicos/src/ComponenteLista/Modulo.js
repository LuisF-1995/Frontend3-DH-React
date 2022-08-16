import React from 'react';
import Lista from './ComponenteLista';

function ListaUsuarios({listaUsuarios}){
    
    
    return (
        listaUsuarios.map( (usuario, index) => <Lista key={index} indice={index} nombre={usuario.nombre} edad={usuario.edad} 
        sexo={usuario.sexo} ></Lista> )
    )
    

}

export default ListaUsuarios;