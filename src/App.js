
import './App.css';
import calculadora from './imagenes/calculadora.png';
import Boton from './componentes/Boton.js';
import Pantalla from './componentes/Pantalla.js'
import BotonClear from './componentes/BotonClear.js'
import { useState} from 'react';
import { evaluate} from 'mathjs';


function App() {

  const [input , setInput ] = useState ('');

  const agregarInput = valor => {
    setInput(input + valor );
  };

  const calcularResultado = () =>{
    if (input){
    setInput (evaluate (input));
  } else {
    alert("Ingrese un valor ")
  }
}


  return (
    <div className="App">
      <div className='contador-logo-contenedor'>
        <img  src={calculadora} className='contador-logo'alt='logo' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={agregarInput}> 1 </Boton>
          <Boton manejarClick={agregarInput}> 2 </Boton>
          <Boton manejarClick={agregarInput}>  3 </Boton>
          <Boton manejarClick={agregarInput}> + </Boton>
        </div>
        <div  className='fila'>
        <Boton manejarClick={agregarInput}> 4 </Boton>
          <Boton manejarClick={agregarInput}> 5 </Boton>
          <Boton manejarClick={agregarInput}> 6 </Boton>
          <Boton manejarClick={agregarInput}> - </Boton>
          </div>
        <div  className='fila'>
        <Boton manejarClick={agregarInput}> 7 </Boton>
          <Boton manejarClick={agregarInput}> 8 </Boton>
          <Boton manejarClick={agregarInput}> 9 </Boton>
          <Boton manejarClick={agregarInput}> * </Boton>
          </div>
        <div  className='fila'>
          <Boton manejarClick={calcularResultado}> = </Boton>
          <Boton manejarClick={agregarInput}> 0 </Boton>
          <Boton manejarClick={agregarInput}> . </Boton>
          <Boton manejarClick={agregarInput}> / </Boton>
          </div>
        <div  className='fila'>
          <BotonClear manejarClear={ () => setInput ('')} > Clear 
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
