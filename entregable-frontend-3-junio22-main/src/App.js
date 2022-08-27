// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
import { useState } from "react";
import Listado from "./components/Listado";
import Cabecera from "./components/Cabecera";

function App() {

  const [totalComprado, setTotalComprado] = useState(0);

  const aumentarTotalComprado = ()=> {
    setTotalComprado(totalComprado+1);
  }

  return (
    <div className="App">
      <Cabecera totalArticulos={totalComprado}/>
      <Listado aumentarArticulos={aumentarTotalComprado}/>
    </div>
  );
}

export default App;
