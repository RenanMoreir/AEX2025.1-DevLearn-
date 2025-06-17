import { StrictMode } from 'react'
import './resumo.css'

function Resumo(){
    return(
    <div className='resumo'>
        <div className='card'>
            <img src='../src/assets/bannerimagem.png'></img>
            <a className='btn'>Continuar Curso</a>
        </div>
        <div className='conteudos'>
            <div className='aulas'>
                <img src='../src/assets/play-btn.svg'></img>
                <p>7 Aulas</p>
                <hr />
            </div>
            <div className='artigos'>
                <img src='../src/assets/file-earmark-text.svg'></img>
                <p>9 Artigos</p>
                <hr />
            </div>
            <div className='quizzes'>
                <img src='../src/assets/card-checklist.svg'></img>
                <p>7 Quizzes</p>
                <hr />
            </div>
            <div className='exercicios'>
                <img src='../src/assets/laptop.svg'></img>
                <p>20 Exercicios</p>
                <hr />
            </div>
            <div className='projetos'>
                <img src='../src/assets/puzzle.svg'></img>
                <p>3 Projetos</p>
                <hr />
            </div>            
        </div>
    </div>
    );
}

export default Resumo;