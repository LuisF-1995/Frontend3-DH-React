import './App.css';
import ContainerPerritos from './Components/ContainerPerros/container'


function App() {

  const titulo = "Clientes caninos de Veterinaria";
  const perritos = [
    {
        Nombre: 'Firulais',
        Edad: 11,
        Sexo: 'Macho',
        Raza: 'Pastor Alemán',
        Tamanio: 'Grande'
    },
    {
      Nombre: 'Estrellita',
      Edad: 7,
      Sexo: 'Hembra',
      Raza: 'Criollita',
      Tamanio: 'Pequeña'
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
    
    <ContainerPerritos tituloPpal={titulo} perritos = {perritos}/>
    
  );
}
  
export default App;
