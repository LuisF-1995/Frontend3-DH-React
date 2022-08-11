import './App.css';
import ContainerP from './Components/ContainerPerros/container'


function App() {

  const perritos = [
    {
        Nombre: 'Firulais',
        Edad: 11,
        Sexo: 'Macho',
        Raza: 'Pastor Alemán',
        Tamanio: 'Grande'
    },
    {
        Nombre: 'Maya',
        Edad: 13,
        Sexo: 'Hembra',
        Raza: 'Pug',
        Tamanio: 'Chico'
    },
    {
        Nombre: 'Pipo',
        Edad: 5,
        Sexo: 'Macho',
        Raza: 'Schnauzer',
        Tamanio: 'Mediano'
    },
    {
        Nombre: 'Pacha',
        Edad: 2,
        Sexo: 'Hembra',
        Raza: 'Mestizo',
        Tamanio: 'Chico'
    }
]

  return (
    <>
    <h1>Clientes caninos de Veterinaria</h1>
    <ContainerP perritos = {perritos}/>
    </>
  );
}
  

export default App;
