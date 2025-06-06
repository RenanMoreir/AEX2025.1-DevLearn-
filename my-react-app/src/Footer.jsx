import { useState } from 'react'
import CodelabLogo from './assets/logo.png'
import InstagranLogo from './assets/instagram.png'
import YoutubeLogo from './assets/youtube.png'
import LinkedinLogo from './assets/linkedin.png'
import './style/footer.css'


function Footer(){
    return(
        <div className='footer'>
            <div className='logo'>
                <img src={CodelabLogo}></img>
            </div>
            <div className='explorar'>
                <h2>Explorar</h2>
                <ul>
                    <li><a href='#'>Todos os cursos</a></li>
                    <li><a href='#'>Categorias</a></li>
                    <li><a href='#'>Meu aprendizado</a></li>
                    <li><a href='#'>Cursos populares</a></li>
                    <li><a href='#'>Recomendados</a></li>
                </ul>
            </div>
            <div className='institucional'>
                <h2>Institucional</h2>
                <ul>
                    <li><a href='#'>Sobre a Dev.learn()</a></li>
                    <li><a href='#'>Como funciona</a></li>
                    <li><a href='#'>Equipe</a></li>
                    <li><a href='#'>Autores</a></li>
                </ul>
            </div>
            <div className='comunidade'>
                <h2>Comunidade</h2>
                <ul>
                    <li><a href='#'>Forum ou comunidade</a></li>
                    <li><a href='#'>Eventos e lives</a></li>
                    <li><a href='#'>GitHub: @@@@@@</a></li>
                </ul>
            </div>
            <div className='social'>
                <h2>Social</h2>
                <ul>
                    <li><a className="social" href='#'><img src={InstagranLogo}/></a></li>
                    <li><a className="social" href='#'><img src={YoutubeLogo}/></a></li>
                    <li><a className="social" href='#'><img src={LinkedinLogo}/></a></li>
                </ul>
            </div>
            <hr className='barra border border-2 opacity-15'></hr>
        </div>

    );

}

export default Footer;
