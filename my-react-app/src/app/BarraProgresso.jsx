import { useState } from 'react'


function BarraProgresso({progresso}){
    return(
    <div>
        <h3>Progresso do Curso</h3>
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
             <div class="progress-bar" style={{width: progresso, backgroundColor: "#E41376"}}></div>
        </div>
        <p>{progresso}</p>
    </div>
    );
}

export default BarraProgresso
