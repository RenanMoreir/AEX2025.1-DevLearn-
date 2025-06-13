import { useState } from 'react'
import  '../style/navbar.css'
import CodelabLogo from '../assets/logo.png'
import Busca from './pesquisa'
import Pesquisa from './pesquisa';


function NavBar(){
    return(
        <div className='NavBar'>
            <div className='logo navbar-brand'>
                <img src={CodelabLogo} alt="Logo do codLab" className='d-inline-block align-text-top'/>
                <h3 className='d-inline-block align-text-top'>Dev.learn()</h3>
            </div>
            {/*futura barra de pesquisa <Pesquisa></Pesquisa>*/}
            <a className='login btn' href='#' >Login</a>

        </div>
    );
}

export default NavBar;