import { StrictMode } from 'react'
import './arcodeon.css'

function Arcodeon(props){
    return(
        <div className="accordion-item" >
            <h2 className="accordion-header">
            <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target={"#"+props.numero} aria-expanded="true" aria-controls={props.numero}>
                {props.titulo}
            </button>
            </h2>
            <div id={props.numero} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <div className='conteudoArc'>
                    <a href='#'>
                        <img src='../src/assets/play-btn.svg'></img>
                        <p>Introdução - Apresentação</p>
                    </a>
                </div>
                <div className='conteudoArc'>
                    <a href='#'>
                        <img src='../src/assets/card-checklist.svg'></img>
                        <p>Teste seu conhecimento</p>
                    </a>
                </div>
                <div className='conteudoArc'>
                    {/* LInk para a página do artigo - para testes apenas */}
                    <a href='/artigo.html'>
                        <img src='../src/assets/file-earmark-text.svg'></img>
                        <p>Links úteis e textos complementares</p>
                    </a>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Arcodeon