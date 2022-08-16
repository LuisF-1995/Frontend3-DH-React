import './App.css';
import React from 'react';
import ListaUsuarios from './ComponenteLista/Modulo';

function App() {

  const usuarios = [
    {nombre: "Luis", edad: 26, sexo:"M"},
    {nombre: "Ana", edad: 27, sexo:"F"},
    {nombre: "Estrellita", edad: 52, sexo:"F"}
  ]

  return (
    <ListaUsuarios listaUsuarios = {usuarios}></ListaUsuarios>
  );
}

export default App;
