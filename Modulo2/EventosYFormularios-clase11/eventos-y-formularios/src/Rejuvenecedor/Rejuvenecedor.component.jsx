import { useState } from "react";


const Rejuvenecedor = () => {

    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState(0);

    const validar = (e) => {
        e.preventDefault();
        if(typeof(nombre) === "string" && nombre.length>1  && edad>1 && edad>10) {
            setEdad(edad-10);
        }else{
            console.error("Valores invalidos")
        }
    }

    return (
        <>
        <br/>
        <br/>
        <form onSubmit={validar}>
            <label htmlFor="nombre">Nombre: </label>
            <input type="text" name="nombre" id="nombre" placeholder="Nombre" onChange={(e)=>setNombre(e.target.value)}/>
            <br/>
            <label htmlFor="edad">Edad: </label>
            <input type="number" name="edad" id="edad" placeholder="Edad" onChange={(e)=>setEdad(e.target.value)}/>
            <br/>
            <button type="submit">Rejuvenecer</button>
        </form>
        <br/>
        <br/>
        
        <h1>{nombre}</h1>
        <h1>{edad}</h1>
        </>
    )

}

export default Rejuvenecedor;