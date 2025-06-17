import { StrictMode } from 'react'
 
function Arcodeon(props){
    return(
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#"+props.numero} aria-expanded="true" aria-controls={props.numero}>
                {props.titulo}
            </button>
            </h2>
            <div id={props.numero} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <div className='conteudo'>
                    <img src='../src/assets/play-btn.svg'></img>
                    <h3>Introdução - Apresentação</h3>
                </div>
                <div className='conteudo'>
                    <img src='../src/assets/card-checklist.svg'></img>
                    <h3>Teste seu conhecimento</h3>
                </div>
                <div className='conteudo'>
                    <img src='../src/assets/file-earmark-text.svg'></img>
                    <h3>Links úteis e textos complementares</h3>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Arcodeon