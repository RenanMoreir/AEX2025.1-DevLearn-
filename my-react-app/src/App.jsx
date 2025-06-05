import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardCurso from './CardCurso.jsx'
import ImplementaCarrosel from './ImplementaCarrosel.jsx'

function App() {
  const [count, setCount] = useState(0)

  return(
    <div>
      <div>
        
      </div>
      <div className='cursoPopular'>
        <div className='titulo'>
          <h1 style={{color:"#5EDFFF"}}>Cursos</h1>
          <h1 style={{color:"#E41376"}}>Mais Populares</h1>
        </div>
        <div className='cursos  '>
            <ImplementaCarrosel visivel={2} nItens={[0, 1, 2, 3, 4]} item={[<CardCurso/>, <CardCurso/>, <CardCurso/>, <CardCurso/>, <CardCurso/>]} />
        </div>
      </div>
    </div>
  );
}

export default App;
