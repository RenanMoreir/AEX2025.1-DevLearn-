import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './curso.css'
import Footer from '../Footer/Footer.jsx'
import NavBar from '../NavBar/NavBar.jsx'
import Descricao from '../Descricao/Descricao.jsx'
import Resumo from '../Resumo/Resumo.jsx'
import BarraProgresso from '../BarraProgresso/BarraProgresso.jsx'
import Arcodeon from '../Arcodeon/Arcodeon.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <div className='conteudo'>
        <Descricao className='Descricao' />
        <Resumo className='Resumo' />
        <BarraProgresso className='BarraProgresso' progresso='10%' />
        <div className='accordion Arcodeon'>
          <Arcodeon 
            numero="1"
            titulo="MODULO 1 - Variaveis"
            //não sei direito como passaria o conteudo  
          />
          <Arcodeon numero={"2"}/>
          <Arcodeon numero={"3"}/>
        </div>
    </div>
    <Footer />
  </StrictMode>,
)
