
import { useEffect, useState } from 'react';
import './App.css';
import './index.css';


function App() {

  const [nombre, setNombre] = useState("")
  const [edad, setEdad] = useState(0)
  const [pais, setPais] = useState("")
  const [cargo, setCargo] = useState("")
  const [year, setYear] = useState(0)

  const handleChange= (e)=>{
    const id = e.target.id
    console.log(id)

    if(id === 'nombre')setNombre(e.target.value)
    if(id === 'edad') setEdad(e.target.value)
    if(id === 'pais') setPais(e.target.value)
    if(id === 'cargo')setCargo(e.target.value)
    if(id === 'year') setYear(e.target.value)
  }

  const mostrarDatosAlert = ()=>{
    console.log(`${nombre} \n ${edad}, \n ${pais}, \n${cargo}, \n${year}`,);
    alert(`${nombre} \n ${edad}, \n ${pais}, \n${cargo}, \n${year}`,);
  }

  return (
    <div className="App">
      <div className='container container-empleados'>
        <div className='container-datos'>
        <h1 className="heading-empleados">Gestion de Empleados</h1>
         
         <div className="datos">
         
            <div className="datos__form-group"> 
              <label>Mombre:</label>
              <input id="nombre" onChange={handleChange} type="text"/>
            </div>

            <div className="datos__form-group"> 
              <label>Edad:</label>
              <input id="edad" onChange={handleChange} type="number"/>
            </div>

            <div className="datos__form-group"> 
              <label>Pais:</label>
              <input id="pais" onChange={handleChange} type="text"/>
            </div>
            <div className="datos__form-group"> 
              <label>Cargo:</label>
              <input id="cargo" onChange={handleChange} type="text"/>
            </div>
            <div className="datos__form-group"> 
              <label>Year:</label>
              <input id="year" onChange={handleChange} type="date"/>
            </div>

            <div className="datos__buttons">
              <button className="yellow" onClick={mostrarDatosAlert}>Actualizar</button>
              <button className="skyblue">Cancelar</button>
            </div>
         </div>

        </div>


      </div>
    </div>
  );
}

export default App; 
//2940
