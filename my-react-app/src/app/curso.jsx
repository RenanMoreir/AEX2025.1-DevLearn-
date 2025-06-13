import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../style/curso.css'
import Footer from './Footer.jsx'
import NavBar from './NavBar.jsx'
import Descricao from './Descricao.jsx'
import Resumo from './Resumo.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <div className='conteudo'>
        <Descricao className='Descricao' />
        <Resumo className='Resumo' />
        {/*<BarraProgresso />
        <Arcodeon />*/}
    </div>
    <Footer />
  </StrictMode>,
)
