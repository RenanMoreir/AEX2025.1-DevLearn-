import { useState } from 'react'
import '../style/cardcurso.css'
import imagem from "../assets/logo.png"

function CardCurso(){
    return(
    <div className='card'>
        <div className='imagem'>
            <img></img>
        </div>
        <div className='tags'>
            <div className='tagitem inciante'>
                <h4>Iniciante</h4>
            </div>
            <div className='tagitem javascript'>
                <h4>JavaScript</h4>
            </div>
            <div className='tagitem full-stack'>
                <h4>Full-Stack</h4>
            </div>
        </div>
        <div className='descricao'>
            <h3>Introução a Programação com JavaScript</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in tortor mi. Phasellus sed ipsum in.</p>
        </div>
        <div className='vermais'>
            <a href='./src/Curso.html' className='mais btn'>Ver Mais</a>
        </div>

    </div>
    )
}

function carrosel(){
    $.js()
}

export default CardCurso;