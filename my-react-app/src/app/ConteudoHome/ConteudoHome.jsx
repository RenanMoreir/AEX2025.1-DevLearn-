import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './conteudohome.css'
import './index.css'
import Footer from '../Footer/Footer.jsx'
import NavBar from '../NavBar/NavBar.jsx'
import CardCurso from '../CardCurso/CardCurso.jsx'
import ImplementaCarrosel from '../Carrosel/ImplementaCarrosel.jsx'
import Banner from '../Banner/Banner.jsx'

createRoot(document.getElementById('root')).render(
    <div>
      <NavBar />
      <Banner />
      <div className='cursoPopular'>
        <div className='titulo'>
          <h1 style={{color:"#5EDFFF"}}>Cursos</h1>
          <h1 style={{color:"#E41376"}}>Mais Populares</h1>
        </div>
        <div className='cursos'>
            <ImplementaCarrosel visivel={3} nItens={[0, 1, 2, 3, 4]} item={[<CardCurso/>, <CardCurso/>, <CardCurso/>, <CardCurso/>, <CardCurso/>]} />
        </div>
      </div>
      <div className='conteiner'>
        <div className='menssagem'>
            <h3>É hora de investir no que realmente importa: você</h3>
            <p>
              Conhecimento que abre portas, amplia horizontes e transforma ideias em realidade.
              Aqui, aprender programação não é um fardo: é uma jornada leve, prática e feita sob medida para você, com conteúdos claros, vídeos explicativos, quizzes e desafios interativos.
              Seja no seu ritmo ou no seu tempo, o importante é começar. 
            </p>
            <a className='btn'>Começe agora</a>
        </div>
      </div>
      <Footer/>
    </div>
  );