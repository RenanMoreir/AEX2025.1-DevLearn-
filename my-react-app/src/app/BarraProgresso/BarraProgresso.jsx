import { useState } from 'react'
import './barraProgresso.css'


function BarraProgresso({progresso}){
    return(
    <div id='barra'>
        <h3>Progresso do Curso</h3>
        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
             <div className="progress-bar" style={{width: progresso}}></div>
        </div>
        <p>{progresso}</p>
    </div>
    );
}

export default BarraProgresso
