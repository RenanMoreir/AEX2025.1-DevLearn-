import { useState } from 'react'
import './banner.css'

function Banner(){
    return(
        <div className='banner' style={{backgroundImage:'./assets/bannerimagem.png'}}>
            <div className='conteudo'>
                <h1>Introdução a programação com JavaScript</h1>
                <p>Curso introdutório do CodeLab que ensina os fundamentos da programação usando JavaScript, abordando variáveis, estruturas de controle, funções e manipulação do DOM. Ideal para iniciantes que desejam dar os primeiros passos no desenvolvimento web.</p>
                <a className='btn'>Inscreva-se Gratuitamente</a>
            </div>
        </div>
    )

}

export default Banner