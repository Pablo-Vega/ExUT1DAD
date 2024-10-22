import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
/*
import './App.css';
import { useState } from 'react';
import { CustomButton } from "milibreria";

function App() {
  const [count, setCount] = useState(0); 

  const datos = {
    animal: 'animal',
    imagenUrl: '/perro.jpg',
    imagenSize: 150,
  };

  function handleClick() {
    setCount(count + 1); 
  }

  return (
    <>
      <h1>Soy un {datos.animal} y vivo feliz</h1>
      <img
        className='avatar'
        src={datos.imagenUrl}
        alt='img'
        style={{ width: datos.imagenSize, height: datos.imagenSize }}
      />
      
      <CustomButton
        text={`Me picastes ${count} veces`}                        
        size="medium"                      
        onClick={handleClick}              
      />
    </>
  );
}

export default App;
*/